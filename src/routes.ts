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
    let result = await controller.get(req, res, id)
    res.send(result)
})

routes.post('/:obj', async (req, res) => {
    const { obj } = req.params
    const controller = controllers[obj].controller
    let result = await controller.create(req, res)
    res.send(result)
})

routes.put('/:obj/:id', async (req, res) => {
    const { obj, id } = req.params
    const controller = controllers[obj].controller
    let result = await controller.update(req, res, id)
    res.send(result)
})

routes.delete('/:obj/:id', async (req, res) => {
    const { obj, id } = req.params
    const controller = controllers[obj].controller
    let result = await controller.delete(req, res, id)
    res.send(result)
})


export default routes;