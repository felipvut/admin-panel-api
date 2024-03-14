import { Router } from "express";
import { ClientsController } from "./controllers/ClientsController";
import { WorkersController } from "./controllers/WorkersController";

const routes = Router()

const controllers = {
    clients: {
        controller: new ClientsController()
    },
    workers: {
        controller: new WorkersController()
    },
}

routes.get('/:obj', async (req, res) => {
    const { obj } = req.params
    const controller = controllers[obj].controller
    return await controller.list(req, res)

})

routes.get('/:obj/:id', async (req, res) => {
    const { obj, id } = req.params
    const controller = controllers[obj].controller
    return await controller.get(req, res, id)
})

routes.post('/:obj', async (req, res) => {
    const { obj } = req.params
    const controller = controllers[obj].controller
    return await controller.create(req, res)
})

routes.put('/:obj/:id', async (req, res) => {
    const { obj, id } = req.params
    const controller = controllers[obj].controller
    return await controller.update(req, res, id)
})

routes.delete('/:obj/:id', async (req, res) => {
    const { obj, id } = req.params
    const controller = controllers[obj].controller
    return await controller.delete(req, res, id)
})


export default routes;