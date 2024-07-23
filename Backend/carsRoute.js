import express from 'express';
import { Car } from './models/carModel.js';


const router = express.Router();

//Route for save new Car
router.post('/', async (request, response) => {
    try{
        if(
            !request.body.carManufacturer ||
            !request.body.fuel ||
            !request.body.transmission ||
            !request.body.doorsNumber ||
            !request.body.vinNumber ||
            !request.body.carModel ||
            !request.body.displacement ||
            !request.body.seatsNumber ||
            !request.body.productionYear ||
            !request.body.power ||
            !request.body.bodyColor ||
            !request.body.firstRegistration ||
            !request.body.mileage ||
            !request.body.bodyType ||
            !request.body.interiorColor ||
            !request.body.features ||
            !request.body.pictures ||
            !request.body.price
        ){
            return response.status(400).send({
                message: 'All required fields must be provided'
            })
        }
        const newCar = {
            carManufacturer: request.body.carManufacturer,
            fuel: request.body.fuel,
            transmission: request.body.transmission,
            doorsNumber: request.body.doorsNumber,
            vinNumber: request.body.vinNumber,
            carModel: request.body.carModel,
            displacement: request.body.displacement,
            seatsNumber: request.body.seatsNumber,
            productionYear: request.body.productionYear,
            power: request.body.power,
            bodyColor: request.body.bodyColor,
            firstRegistration: request.body.firstRegistration,
            mileage: request.body.mileage,
            bodyType: request.body.bodyType,
            interiorColor: request.body.interiorColor,
            features: request.body.features,
            pictures: request.body.pictures,
            price: request.body.price
        };

        const car = await Car.create(newCar);
        return response.status(201).send(car);
    }catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

//Route for Get All Cars frm database
router.get('/', async (request, response) => {
    try{
        const cars = await Car.find({});

        return response.status(200).json(cars);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

 //Route for Get All Cars frm database by id
router.get('/:id', async (request, response) => {
    try{
        const {id} =request.params;

        const car = await Car.findById(id);

        return response.status(200).json(car);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

//Route for Update a Car
router.put('/:id', async (request, response) => {
    try{
        if(
            !request.body.carManufacturer ||
            !request.body.fuel ||
            !request.body.transmission ||
            !request.body.doorsNumber ||
            !request.body.vinNumber ||
            !request.body.carModel ||
            !request.body.displacement ||
            !request.body.seatsNumber ||
            !request.body.productionYear ||
            !request.body.power ||
            !request.body.bodyColor ||
            !request.body.firstRegistration ||
            !request.body.mileage ||
            !request.body.bodyType ||
            !request.body.interiorColor ||
            !request.body.features ||
            !request.body.pictures ||
            !request.body.price 
        ){ 
            return response.status(400).send({
                message: 'Send all required fields'
            });
        }
        
        const {id} = request.params;

        const result = await Car.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({message: 'Car not found'});
        }

        return response.status(200).send({message: 'car updated successfully'})

    }catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message})
    }
});

//Route for Deleting a book
 router.delete('/:id', async (request, response) =>{
    try{
        const {id} = request.params;

        const result = await Car.findByIdAndDelete(id);
        if (!result) {
            return response.status(400).json({message: 'Car not found'});
        } return response.status(200).send({message: 'Car deleted successfully'});
    }catch(error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
 });

export default router;