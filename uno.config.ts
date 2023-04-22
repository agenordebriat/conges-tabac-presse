import { defineConfig, presetUno } from "unocss"
import formKitUnocss from "@formkit/themes/unocss"

export default defineConfig({
  presets: [formKitUnocss(), presetUno()],
})
