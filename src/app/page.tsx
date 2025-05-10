"use client";
import { motion } from 'framer-motion';
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-blue-300">
      <h1 className="absolute top-0 left-0 right-0 bottom-0 text-[25rem] flex justify-center items-center min-h-screen font-extrabold uppercase tracking-widest pointer-events-none select-none h-full w-full">VISA</h1>
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Card className="w-[350px] bg-blue-600 bg-opacity-95 border shadow-2xl rounded-2xl backdrop-blur-sm bg-gradient-to-br from-slate-900 to-slate-800 border-gray-700/30">
            <CardHeader>
              <CardTitle className='text-white text-xl font-semibold tracking-wide'>Check-out</CardTitle>
              <CardDescription className='text-gray-400 text-sm mb-4'>Check-out of your VISA Credit Card</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name" className='text-white'>Name</Label>
                    <Input id="name" placeholder="Full Name" className='bg-slate-400 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500' />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button className="border border-gray-600 hover:scale-105 transition-transform text-gray-700 hover:bg-gray-700" variant="outline">Cancel</Button>
              <Button className='bg-indigo-600 hover:scale-105 transition-transform hover:bg-indigo-500 text-white rounded-lg px-4 py-2'>Confirm</Button>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
