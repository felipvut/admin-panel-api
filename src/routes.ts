import { Router } from "express";
import { ClientsController } from "./controllers/ClientsController";
import { WorkersController } from "./controllers/WorkersController";
import { UsersController } from "./controllers/UsersController";

const routes = Router()

const controllers = {
    clients: {
        controller: new ClientsController()
    },
    workers: {
        controller: new WorkersController()
    },
    users: {
        controller: new UsersController()
    },
}

routes.get('generic/:obj', async (req, res) => {
    const { obj } = req.params
    const controller = controllers[obj].controller
    return await controller.list(req, res)

})

routes.get('generic/:obj/:id', async (req, res) => {
    const { obj, id } = req.params
    const controller = controllers[obj].controller
    return await controller.get(req, res, id)
})

routes.post('generic/:obj', async (req, res) => {
    const { obj } = req.params
    const controller = controllers[obj].controller
    return await controller.create(req, res)
})

routes.put('generic/:obj/:id', async (req, res) => {
    const { obj, id } = req.params
    const controller = controllers[obj].controller
    return await controller.update(req, res, id)
})

routes.delete('generic/:obj/:id', async (req, res) => {
    const { obj, id } = req.params
    const controller = controllers[obj].controller
    return await controller.delete(req, res, id)
})

routes.post('/login', async (req, res) => {
    const controller = new UsersController()
    return await controller.login(req, res)
})

export default routes;