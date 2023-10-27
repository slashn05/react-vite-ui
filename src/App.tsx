import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Label } from '@/components/ui/label';
import { CalendarIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


function App() {
  return (
    <main className='flex flex-col'>
          <div className='inline-flex items-center'>
            <Label htmlFor='name'>Name</Label>
            <Input name='name' type='text' placeholder='Enter name' />
          </div>
          <div className='inline-flex items-center'>
            <Label htmlFor='surname'>Surname</Label>
            <Input name='surname' type='text' placeholder='Enter surname' />
          </div>
          <div className='inline-flex items-center'>
            <Label htmlFor='dob'>DOB</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={'outline'}
                  className={cn(
                    'w-[240px] pl-3 text-left font-normal',
                    'text-muted-foreground'
                  )}
                >
                  <span>Pick a date</span>
                  <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-auto p-0' align='start'>
                <Calendar mode='single' initialFocus />
              </PopoverContent>
            </Popover>
          </div>
          <div className='inline-flex items-center'>
            <Label htmlFor='sex'>Sex</Label>
            <RadioGroup defaultValue="male">
            <div className="flex items-center space-x-2">
              <RadioGroupItem defaultChecked value="male" id="r1" />
              <Label htmlFor="r1">Male</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem  value="female" id="r2" />
              <Label htmlFor="r2">Female</Label>
            </div>
          </RadioGroup>
          </div>
          <div className='inline-flex items-center'>
            <Label htmlFor='aadhar'>Aadhar Card no</Label>
            <Input name='aadhar' type='text' placeholder='Enter Aadhar' />
          </div>
          <div className='inline-flex items-center'>
            <Label htmlFor='dl'>Driving License No</Label>
            <Input name='dl' type='text' placeholder='Enter DL no' />
          </div>
          <div className='inline-flex items-center'>
            <Label htmlFor='health-history'>Health History</Label>
            <Input name='hh' type='text' placeholder='Do you have any of the following - BP/Sugar/Thyroid etc.' />
          </div>
          <div className='inline-flex items-center'>
            <Label htmlFor='mobileNo'>Mobile No</Label>
            <Input name='mobileNo' type='tel' placeholder='Enter you mobile no' />
          </div>
          <div className='inline-flex items-center'>
            <Label htmlFor='whatsapp'>Whatsapp No</Label>
            <Input name='whatsapp' type='email' placeholder='Enter whatsapp no' />
          </div>
          <div className='inline-flex items-center'>
            <Label htmlFor='email'>Email</Label>
            <Input name='email' type='email' placeholder='Enter email' />
          </div>
          <div className='inline-flex items-center'>
            <Label htmlFor='photo'>Photo</Label>
            <Input name='photo' type='file' accept="image/png, image/jpeg"/>
          </div>
          
          

    </main>
  );
}

export default App;
