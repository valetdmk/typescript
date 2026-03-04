import './style.css'
import { sayHello } from '@/components/greeter'

const message = sayHello('Имя')

const app = document.querySelector<HTMLDivElement>('#app')
if (app) {
  app.innerHTML = `<h1>${message}</h1>`
}

console.log(message)