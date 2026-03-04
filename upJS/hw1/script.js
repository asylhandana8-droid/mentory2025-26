class Request {
  constructor(baseUrl, config = {}) {
    this.baseUrl = baseUrl;
    this.defaultConfig = {
      headers: config.headers || { "Content-Type": "application/json" },
      timeout: config.timeout || 5000
    };
  }

  async get(endpoint, config = {}) {
    return this._fetch(endpoint, {
      ...config,
      method: "GET"
    });
  }

  async post(endpoint, data, config = {}) {
    return this._fetch(endpoint, {
      ...config,
      method: "POST",
      body: data
    });
  }

  async put(endpoint, data, config = {}) {
    return this._fetch(endpoint, {
      ...config,
      method: "PUT",
      body: data
    });
  }

  async patch(endpoint, data, config = {}) {
    return this._fetch(endpoint, {
      ...config,
      method: "PATCH",
      body: data
    });
  }

  async delete(endpoint, config = {}) {
    return this._fetch(endpoint, {
      ...config,
      method: "DELETE"
    });
  }

  async _fetch(endpoint, options = {}) {
    const merged = this._mergeConfig(options);
    const { timeout, query, headers, body, ...fetchOptions } = merged;
    const url = this._buildUrl(endpoint, query);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(url, {
        ...fetchOptions,
        headers,
        body: this._prepareBody(body, headers),
        signal: controller.signal
      });

      if (!response.ok) {
        const errorData = await this._parseResponse(response);
        const error = new Error(`HTTP error! Status: ${response.status}`);
        error.status = response.status;
        error.data = errorData;
        throw error;
      }

      return await this._parseResponse(response);
    } catch (error) {
      console.error("Fetch error:", error);
      throw error;
    } finally {
      clearTimeout(timeoutId);
    }
  }

  _mergeConfig(options) {
    return {
      ...this.defaultConfig,
      ...options,
      headers: {
        ...(this.defaultConfig.headers || {}),
        ...(options.headers || {})
      }
    };
  }

  _buildUrl(endpoint, query) {
    const url = new URL(`${this.baseUrl}${endpoint}`);

    if (query) {
      Object.entries(query).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          url.searchParams.append(key, String(value));
        }
      });
    }

    return url.toString();
  }

  _prepareBody(body, headers) {
    if (body === undefined || body === null) return undefined;
    if (body instanceof FormData) return body;

    const hasContentType = Object.keys(headers || {}).some(
      (key) => key.toLowerCase() === "content-type"
    );

    if (typeof body === "object") {
      if (!hasContentType) {
        headers["Content-Type"] = "application/json";
      }
      return JSON.stringify(body);
    }

    return body;
  }

  async _parseResponse(response) {
    if (response.status === 204) return null;

    const contentType = response.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      return response.json();
    }

    if (contentType.includes("text/")) {
      return response.text();
    }

    return response.blob();
  }
}

// Пример использования
const request = new Request("https://jsonplaceholder.typicode.com", {
  timeout: 8000,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer your-token-here"
  }
});

(async () => {
  try {
    const postData = {
      title: "foo",
      body: "bar",
      userId: 1
    };
    const responsePost = await request.post("/posts", postData);
    console.log("POST response:", responsePost);

    const responseGet = await request.get("/posts", {
      query: { _limit: 3 }
    });
    console.log("GET response:", responseGet);

    const updatedData = {
      title: "foo updated",
      body: "bar updated"
    };
    const responsePut = await request.put("/posts/1", updatedData);
    console.log("PUT response:", responsePut);

    const responsePatch = await request.patch("/posts/1", {
      title: "patched title"
    });
    console.log("PATCH response:", responsePatch);

    const responseDelete = await request.delete("/posts/1", {
      timeout: 3000
    });
    console.log("DELETE response:", responseDelete);
  } catch (error) {
    console.error("Request error:", error);
  }
})();
