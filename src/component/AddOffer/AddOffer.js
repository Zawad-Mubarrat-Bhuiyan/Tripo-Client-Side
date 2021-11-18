import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddOffer.css'

const AddOffer = () => {
      const { register, handleSubmit, reset } = useForm();
      const onSubmit = data => {
            console.log(data)

            axios.post('http://localhost:5000/offers', data)
                  .then(res => {
                        if (res.data.insertedId) {
                              alert('successfully added service!')
                              reset();
                        }
                  })
      };
      return (
            <div>
                  <div className="container border-shadow mt-5">
                        <div className="row">
                              <div className="col-lg-7 long-padding">
                                    <div className="text-center">
                                          <h1 className="text-bold mb-4">Add a Offer</h1>
                                    </div>
                                    <div>
                                          <form className="add-service" onSubmit={handleSubmit(onSubmit)}>
                                                <input className="form-control"  {...register("id", { required: true, maxLength: 20 })} placeholder="Id" />
                                                <input className="form-control"  {...register("name", { required: true, maxLength: 20 })} placeholder="Hotel Name" />
                                                <textarea className="form-control"  {...register("description")} placeholder="Hotel description" />
                                                <input className="form-control" type="number" {...register("price", { required: true })} placeholder="Offer price" />
                                                <input className="form-control"  {...register("img")} placeholder="Image url" />
                                                <input className="form-control" type="submit" />
                                          </form>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default AddOffer;