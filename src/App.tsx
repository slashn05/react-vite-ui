import { useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { CalendarIcon } from '@radix-ui/react-icons';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { format } from 'date-fns';
import { cn, getAge } from '@/lib/utils';
import { useForm } from 'react-hook-form';

const onSubmit = (values) => {
  console.log(values);
};

function App() {
  const { setValue, formState, watch, ...form } = useForm();
  const dob = watch('dob');

  useEffect(() => {
    if (formState.touchedFields) {
      setValue('age', getAge(dob));
    }
  }, [setValue, dob, formState]);

  return (
    <>
      <div className='mx-4 my-4'>
        <h2 className='text-xl font-medium'>Please enter the details</h2>
      </div>
      <Separator className='my-6' />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex flex-col sm:flex-row sm:gap-16 '
        >
          <div className='sm:w-1/4 mx-4'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem className='mb-2'>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder='Your name' {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='surname'
              render={({ field }) => (
                <FormItem className='mb-2'>
                  <FormLabel>Surname</FormLabel>
                  <FormControl>
                    <Input placeholder='Your surname' {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='dob'
              render={({ field }) => (
                <FormItem className='flex flex-col mb-2'>
                  <FormLabel>Date of Birth</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'pl-3 text-left font-normal',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value ? (
                            format(field.value, 'PPP')
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className='w-auto p-0' align='start'>
                      <Calendar
                        mode='single'
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date('1900-01-01')
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='sex'
              render={({ field }) => (
                <FormItem className='mb-2'>
                  <FormLabel>Sex</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Select you gender' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value='male'>Male</SelectItem>
                      <SelectItem value='female'>Female</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='aadhar'
              render={({ field }) => (
                <FormItem className='mb-2'>
                  <FormLabel>Aadhar No</FormLabel>
                  <FormControl>
                    <Input placeholder='Your Aadhar No' {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='dl'
              render={({ field }) => (
                <FormItem className='mb-2'>
                  <FormLabel>Driving License No</FormLabel>
                  <FormControl>
                    <Input placeholder='Your DL No' {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='health-history'
              render={({ field }) => (
                <FormItem className='mb-2'>
                  <FormLabel>Health History</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='Tell us about your health history, if you have any BP/Sugar/Thyroid'
                      className='resize-none'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='mobileno'
              render={({ field }) => (
                <FormItem className='mb-2'>
                  <FormLabel>Mobile No</FormLabel>
                  <FormControl>
                    <Input type='tel' placeholder='Your Mobile No' {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='whatsapp'
              render={({ field }) => (
                <FormItem className='mb-2'>
                  <FormLabel>WhatsApp No</FormLabel>
                  <FormControl>
                    <Input
                      type='tel'
                      placeholder='Your Whatsapp No'
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className='mb-2'>
                  <FormLabel>Email Id</FormLabel>
                  <FormControl>
                    <Input
                      type='email'
                      placeholder='Your Email Id'
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='photo'
              render={({ field }) => (
                <FormItem className='mb-2'>
                  <FormLabel>Photo</FormLabel>
                  <FormControl>
                    <Input type='file' accept='.png,.jpeg,.jpg' {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className='sm:w-1/4 mx-4'>
            <FormField
              control={form.control}
              name='fathersname'
              render={({ field }) => (
                <FormItem className='mb-2'>
                  <FormLabel>Fathers Name</FormLabel>
                  <FormControl>
                    <Input placeholder='Your fathers name' {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='mothersname'
              render={({ field }) => (
                <FormItem className='mb-2'>
                  <FormLabel>Mothers Name</FormLabel>
                  <FormControl>
                    <Input placeholder='Your mothers name' {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='age'
              render={({ field }) => (
                <FormItem className='mb-2'>
                  <FormLabel>Age (in years)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Your age is calculated based on date of birth if given'
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='bloodgroup'
              render={({ field }) => (
                <FormItem className='mb-2'>
                  <FormLabel>Blood Group</FormLabel>
                  <FormControl>
                    <Input placeholder='Your blood group' {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='education'
              render={({ field }) => (
                <FormItem className='mb-2'>
                  <FormLabel>Education</FormLabel>
                  <FormControl>
                    <Input placeholder='Your education' {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='address'
              render={({ field }) => (
                <FormItem className='mb-2'>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='Your complete address'
                      className='resize-none'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='married'
              render={({ field }) => (
                <FormItem className='mb-2'>
                  <FormLabel>Are you married ?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue='no'
                      className='flex flex-col space-y-1'
                    >
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='yes' />
                        </FormControl>
                        <FormLabel className='font-normal'>yes</FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='no' />
                        </FormControl>
                        <FormLabel className='font-normal'>No</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='business'
              render={({ field }) => (
                <FormItem className='mb-2'>
                  <div className='space-y-0.5'>
                    <FormLabel>Do you own a business ?</FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='shopname'
              render={({ field }) => (
                <FormItem className='mb-2'>
                  <FormLabel>Shop name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Enter your shop name'
                      {...field}
                      disabled={!watch('business')}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='shop-address'
              render={({ field }) => (
                <FormItem className='mb-2'>
                  <FormLabel>Shop Address</FormLabel>
                  <FormControl>
                    <Textarea
                      disabled={!watch('business')}
                      placeholder='Enter the complete address of the shop'
                      className='resize-none'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='flex flex-row justify-center'>
              <Button className='mt-4 w-5/6 sm:w-screen' type='submit'>
                Add profile
              </Button>
            </div>
            <div className='flex flex-row justify-center'>
              <Button
                variant='secondary'
                className='mt-4 w-5/6 sm:w-screen'
                type='submit'
              >
                Add family member
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </>
  );
}

export default App;
