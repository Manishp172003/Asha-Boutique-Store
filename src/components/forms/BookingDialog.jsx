import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const BookingDialog = ({ open, onOpenChange, onSubmit }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-[#F6F2EE] border-none rounded-[22px]">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-[#2B1E1A]">Book an Appointment</DialogTitle>
          <DialogDescription className="text-[#7A655D]">
            Schedule a fitting or consultation with Asha. We'll confirm your appointment within 24 hours.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={onSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-[#2B1E1A]">Name</Label>
              <Input 
                id="name" 
                placeholder="Your name"
                required
                className="bg-white border-[#E9E3DD] rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-[#2B1E1A]">Phone</Label>
              <Input 
                id="phone" 
                placeholder="+91..."
                required
                className="bg-white border-[#E9E3DD] rounded-xl"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#2B1E1A]">Email</Label>
            <Input 
              id="email" 
              type="email"
              placeholder="your@email.com"
              required
              className="bg-white border-[#E9E3DD] rounded-xl"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="service" className="text-[#2B1E1A]">Service Type</Label>
            <Select required>
              <SelectTrigger className="bg-white border-[#E9E3DD] rounded-xl">
                <SelectValue placeholder="Select service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fitting">Fitting & Alterations</SelectItem>
                <SelectItem value="custom">Custom Tailoring</SelectItem>
                <SelectItem value="consultation">Style Consultation</SelectItem>
                <SelectItem value="blouse">Blouse Stitching</SelectItem>
                <SelectItem value="dress">Dress Making</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date" className="text-[#2B1E1A]">Preferred Date</Label>
              <Input 
                id="date" 
                type="date"
                required
                className="bg-white border-[#E9E3DD] rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time" className="text-[#2B1E1A]">Preferred Time</Label>
              <Select required>
                <SelectTrigger className="bg-white border-[#E9E3DD] rounded-xl">
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Morning (11am - 2pm)</SelectItem>
                  <SelectItem value="afternoon">Afternoon (2pm - 5pm)</SelectItem>
                  <SelectItem value="evening">Evening (5pm - 8pm)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="notes" className="text-[#2B1E1A]">Additional Notes</Label>
            <Textarea 
              id="notes" 
              placeholder="Tell us about your requirements..."
              className="bg-white border-[#E9E3DD] rounded-xl min-h-[100px]"
            />
          </div>
          
          <Button 
            type="submit"
            className="w-full bg-[#E46A53] hover:bg-[#d55a43] text-white rounded-full py-6"
          >
            Request Appointment
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default BookingDialog
