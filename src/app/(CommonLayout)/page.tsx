"use client"
import { useUser } from '@/Context/UserContext'
import React from 'react'

const HomePage = () => {
  const {user} = useUser()
  console.log(user)
  return (
    <div>
      Welcom to Shopy mart

    </div>
  )
}

export default HomePage
