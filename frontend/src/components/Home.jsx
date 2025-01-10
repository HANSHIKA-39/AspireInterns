import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestInternships from './LatestInternships'
import Footer from './shared/Footer'
import useGetAllInternships from '@/hooks/useGetAllInternships'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
function Home() {
  useGetAllInternships();
  const {user}=useSelector(store=>store.auth);
  const navigate=useNavigate();
  useEffect(()=>{
    if(user?.role=='recruiter'){
      navigate('/admin/companies');
    }
  },[])
  return (
    <div>

      <HeroSection/>
      <CategoryCarousel/>
      <LatestInternships/>
      <Footer/>
    </div>
  )
}

export default Home
