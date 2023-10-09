// const { TiktokDL } = require("@tobyg74/tiktok-api-dl")

// const tiktok_url = "https://vt.tiktok.com/ZSNN2s8nh/"

// TiktokDL(tiktok_url, {
//   version: "v2" //  version: "v1" | "v2"
// }).then((result) => {
//   console.log(result)
// })

import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { TiktokDL } from "@tobyg74/tiktok-api-dl";

const app = new Hono();

// const tiktok_url = "https://vt.tiktok.com/ZSNN2s8nh/";

app.get("/", (c) => {
  return c.text("send the id after /");
});
app.get("/:id", async (c) => {
  const id = c.req.param("id");
  let tUrl = "https://vt.tiktok.com/" + id + "/";
  const result = await TiktokDL(tUrl, {
    version: "v2", //  version: "v1" | "v2"
  });
  return c.json({ result });
});

serve(app);
