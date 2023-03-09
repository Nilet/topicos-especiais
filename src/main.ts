// import maskForm from './forms/mask.html?raw'
// import maskFn from './forms/mask'
import cepForm from './forms/cep.html?raw'
import {cep} from './forms/cep'
import './style.scss'

const app = document.querySelector('#app')

if (app) {
  app.innerHTML = cepForm
      // maskFn()
        cep();
}
