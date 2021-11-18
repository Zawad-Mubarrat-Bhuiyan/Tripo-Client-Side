import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';


const Details = () => {
      const { register, handleSubmit, reset } = useForm();
      const { offerId } = useParams();
      const [offer, setOffer] = useState([]);
      const { user } = useAuth();
      let orderStatus = "pending";
      const onSubmit = data => {
            data.status = orderStatus;
            axios.post('http://localhost:5000/orders', data)
                  .then(res => {
                        if (res.data.insertedId) {
                              alert('Order Submited please wait for response');
                              reset();
                        }
                  })
      };


      useEffect(() => {
            fetch(`http://localhost:5000/offers/${offerId}`)
                  .then(res => res.json())
                  .then(data => {
                        setOffer(data)
                  })
      }, [])
      return (
            <div className="container add-service">
                  <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                        {offer.description && <textarea defaultValue={offer.description} {...register("description")} />}
                        {offer.name && <input defaultValue={offer.name} {...register("offerName")} />}
                        <input defaultValue={user.displayName} {...register("name")} />
                        <input defaultValue={user.email} {...register("email", { required: true })} />
                        <input placeholder="Address" defaultValue="" {...register("address", { required: true })} />
                        <input placeholder="City" defaultValue="" {...register("city", { required: true })} />
                        <input type="number" placeholder="Phone Number" defaultValue="" {...register("phone", { required: true })} />
                        <input type="submit" value="Place order" />
                  </form>
            </div>
      );
};

export default Details;