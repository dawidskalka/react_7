import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import WeatherCard from './components/WeatherCard.jsx'
import UserProfile from './components/UserProfile.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WeatherCard city="Warsaw" temperature="25" conditions="rainy" warning="High UV index!" /><br/>
    <UserProfile name="John Doe" email="john.doe@example.com" bio="Software Engineer" website="https://johndoe.com" isPremium={true} followerCount={1000} /><br/>
    <UserProfile name="Jane Smith" email="jajo@gmail.com" bio="Graphic Designer" website="https://janesmith.com" isPremium={false} followerCount={500} /><br/>
    <UserProfile name="Alice Johnson" email="bajo@gmail.com" bio="Content Creator" website="https://alicejohnson.com" isPremium={true} followerCount={1500} />
  </StrictMode>,
)
