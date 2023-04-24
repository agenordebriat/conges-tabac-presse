import formKitUnocss from "@formkit/themes/unocss"
import transformerDirectives from "@unocss/transformer-directives"
import transformerVariantGroup from "@unocss/transformer-variant-group"
import { defineConfig, presetUno } from "unocss"

export default defineConfig({
  presets: [formKitUnocss(), presetUno()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
