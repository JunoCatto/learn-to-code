import request from "supertest";
import { describe, it, expect } from "vitest";
import app from "./index";

describe("GET /add", () => {
  it("adds two numbers from query params", async () => {
    const res = await request(app).get("/add").query({ a: 2, b: 3 });
    expect(res.status).toBe(200);
    expect(res.text).toBe("2 + 3 = 5");
  });
});

describe("GET /sub", () => {
  it("subtracts two numbers from query params", async () => {
    const res = await request(app).get("/sub").query({ a: 2, b: 3 });
    expect(res.status).toBe(200);
    expect(res.text).toBe("2 - 3 = -1");
  });
});

describe("GET /mul", () => {
  it("multiplies two numbers from query params", async () => {
    const res = await request(app).get("/mul").query({ a: 2, b: 3 });
    expect(res.status).toBe(200);
    expect(res.text).toBe("2 * 3 = 6");
  });
});

describe("GET /div", () => {
  it("divides two numbers from query params", async () => {
    const res = await request(app).get("/div").query({ a: 5, b: 2 });
    expect(res.status).toBe(200);
    expect(res.text).toBe("5 / 2 = 2.5");
  });
});
