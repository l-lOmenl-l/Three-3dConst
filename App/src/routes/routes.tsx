import { Routes, Route } from 'react-router-dom';
import  Construct from '../pages/construct/Construct';
import Cart from '../pages/cart/Cart';
import { useJwt } from 'react-jwt';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTQ3NjAyOTUsImlhdCI6MTcxNDcxNzA5NSwic3ViIjoiU2FpdCBFLTEiLCJ1c2VyX2lkIjoxLCJmaW8iOiLQmNCy0LDQvdC-0LIg0JjQstCw0L0g0JjQstCw0L3QvtCy0LjRhyIsImFkZHJlc3MiOiLQky4g0JrRgNCw0YHQvdC-0LTQsNGALCDRg9C7LiDQn9C-0LTQstCw0LvRjNC90LDRjyAyODkiLCJudW1iZXIiOiIrNyg5ODUpNDU2LTg1LTg1In0.m5_vEumfvGDRAr9JAj4nKrYQ3nPr1ZppLO9hmRCPfWw";


function RouteMap() {

  const { decodedToken, isExpired } = useJwt(token);

  console.log(decodedToken)

  return (
      <Routes>
        <Route path="/construct" element={<Construct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
  );
}

export default RouteMap 