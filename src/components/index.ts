import type { App } from 'vue'
import { Icon } from './Icon'
import { Permission } from './Permission'

export const setupGlobCom = (app: App<Element>): void => {
  console.log("load src/components/index.ts")
  app.component('Icon', Icon)
  app.component('Permission', Permission)
}
