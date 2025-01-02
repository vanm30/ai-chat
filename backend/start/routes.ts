/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

import AuthController from '#controllers/auth_controller'
import UsersController from '#controllers/users_controller'

router.get('/health', async () => {
  return {
    status: 'ok',
  }
})

// User endpoints
router.post('/user/check-email', [UsersController, 'checkEmailAvailability'])

router
  .delete('/user/delete/:id', [UsersController, 'deleteUser'])
  .use(middleware.auth({ guards: ['api'] }))

router
  .put('/user/update/:id', [UsersController, 'updateUser'])
  .use(middleware.auth({ guards: ['api'] }))

// Auth endpoints
router.post('/login', [AuthController, 'login'])

router.post('/register', [AuthController, 'register'])