import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SearchPostInput() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="text" placeholder="Your article post name." />
      <Button variant="outline" type="submit">Search</Button>
    </div>
  )
}
