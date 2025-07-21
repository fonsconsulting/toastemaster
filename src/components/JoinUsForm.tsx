import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Mail, Phone, User, MapPin, Calendar, Users, FileText, DollarSign } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

// Form schema
const joinUsSchema = z.object({
  // Personal Information
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  
  // Address
  address: z.string().min(1, { message: "Address is required" }),
  city: z.string().min(1, { message: "City is required" }),
  state: z.string().min(1, { message: "State/Province is required" }),
  zipCode: z.string().min(1, { message: "Zip/Postal code is required" }),
  
  // Membership Information
  membershipType: z.enum(["new", "transfer", "dual", "renewing"]),
  previousExperience: z.enum(["none", "beginner", "intermediate", "advanced"]),
  hearAboutUs: z.string().min(1, { message: "Please tell us how you heard about us" }),
  
  // Goals and Interests
  communicationGoals: z.array(z.string()).min(1, { message: "Please select at least one goal" }),
  meetingPreference: z.enum(["weekday-morning", "weekday-evening", "weekend", "flexible"]),
  
  // Additional Information
  additionalInfo: z.string().optional(),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
  emailUpdates: z.boolean().default(false),
});

const JoinUsForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm({
    resolver: zodResolver(joinUsSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      membershipType: "new",
      previousExperience: "none",
      hearAboutUs: "",
      communicationGoals: [],
      meetingPreference: "flexible",
      additionalInfo: "",
      agreeToTerms: false,
      emailUpdates: false,
    },
  });

  const handleSubmit = (data: any) => {
    console.log("Join Us Form submitted:", data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="w-full max-w-4xl mx-auto bg-background p-4">
        <Card className="w-full">
                  <CardHeader className="text-center bg-gradient-to-br from-emerald-500 via-green-600 to-teal-600 text-white rounded-t-xl">
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-white/20 p-4 shadow-xl">
              <Check className="h-10 w-10" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold">Thank You for Your Interest!</CardTitle>
          <CardDescription className="text-green-100 text-lg">
            Your application has been successfully submitted
          </CardDescription>
        </CardHeader>
          <CardContent className="pt-8 pb-8 px-8 text-center">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">What happens next?</h3>
              <div className="text-left space-y-3 bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-blue-100 p-2 mt-1">
                    <Mail className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Confirmation Email</p>
                    <p className="text-sm text-gray-600">You'll receive a confirmation email within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-blue-100 p-2 mt-1">
                    <Phone className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Welcome Call</p>
                    <p className="text-sm text-gray-600">Quang will contact you at <strong>0414 889 018</strong> to discuss next steps</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-blue-100 p-2 mt-1">
                    <Calendar className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Meeting Invitation</p>
                    <p className="text-sm text-gray-600">We'll invite you to visit our next Sunday meeting (2-4pm, 1st/3rd/5th Sundays) at Club Central Hurstville</p>
                  </div>
                </div>
              </div>
              <Button 
                onClick={() => setIsSubmitted(false)} 
                variant="outline"
                className="mt-6"
              >
                Submit Another Application
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-background p-4">
      <Card className="w-full">
        <CardHeader className="bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-600 text-white rounded-t-xl">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-white/20 p-4 shadow-xl">
              <Users className="h-8 w-8" />
            </div>
            <div>
              <CardTitle className="text-3xl font-bold">Join Hurstville Weekend Toastmasters</CardTitle>
              <CardDescription className="text-blue-100 text-lg">
                Email us to tell us you will be joining us!
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-8 pb-2 px-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
              
              {/* Personal Information Section */}
              <div className="border-0 rounded-2xl p-8 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-2xl shadow-lg">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Personal Information</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your first name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your last name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input placeholder="your.email@example.com" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <Input placeholder="(555) 123-4567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Address Section */}
              <div className="border-0 rounded-2xl p-8 bg-gradient-to-br from-sky-50 to-blue-50 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-to-r from-sky-500 to-blue-500 p-3 rounded-2xl shadow-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">Address Information</h3>
                </div>
                
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Street Address *</FormLabel>
                        <FormControl>
                          <Input placeholder="123 Main Street" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City *</FormLabel>
                          <FormControl>
                            <Input placeholder="City name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="state"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>State/Province *</FormLabel>
                          <FormControl>
                            <Input placeholder="NSW" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="zipCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Zip/Postal Code *</FormLabel>
                          <FormControl>
                            <Input placeholder="2220" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>

              {/* Membership Information Section */}
              <div className="border-0 rounded-2xl p-8 bg-gradient-to-br from-indigo-50 to-blue-50 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-to-r from-indigo-500 to-blue-500 p-3 rounded-2xl shadow-lg">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Membership Information</h3>
                </div>
                
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="membershipType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Membership Type *</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="grid grid-cols-1 md:grid-cols-2 gap-3"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="new" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                <div>
                                  <p className="font-medium">New Member</p>
                                  <p className="text-sm text-gray-600">First time joining Toastmasters</p>
                                </div>
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="transfer" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                <div>
                                  <p className="font-medium">Transfer Member</p>
                                  <p className="text-sm text-gray-600">Moving from another club</p>
                                </div>
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="dual" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                <div>
                                  <p className="font-medium">Dual Member</p>
                                  <p className="text-sm text-gray-600">Member of multiple clubs</p>
                                </div>
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="renewing" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                <div>
                                  <p className="font-medium">Renewing Member</p>
                                  <p className="text-sm text-gray-600">Rejoining after a break</p>
                                </div>
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="previousExperience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Public Speaking Experience *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your experience level" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="none">No experience</SelectItem>
                            <SelectItem value="beginner">Beginner (some experience)</SelectItem>
                            <SelectItem value="intermediate">Intermediate (comfortable speaking)</SelectItem>
                            <SelectItem value="advanced">Advanced (very experienced)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="hearAboutUs"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>How did you hear about us? *</FormLabel>
                        <Select onValueChange={field.onChange}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Please select an option" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="website">Club website (hurstvilleweekend.toastmastersclubs.org)</SelectItem>
                            <SelectItem value="toastmasters-org">Toastmasters.org</SelectItem>
                            <SelectItem value="quang">Quang (0414 889 018)</SelectItem>
                            <SelectItem value="friend-member">Friend/colleague who is a member</SelectItem>
                            <SelectItem value="social-media">Social media</SelectItem>
                            <SelectItem value="google-search">Google search</SelectItem>
                            <SelectItem value="club-central">Club Central Hurstville</SelectItem>
                            <SelectItem value="local-event">Local event or meeting</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Goals and Preferences Section */}
              <div className="border-0 rounded-2xl p-8 bg-gradient-to-br from-cyan-50 to-blue-50 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-2xl shadow-lg">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Goals and Preferences</h3>
                </div>
                
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="communicationGoals"
                    render={() => (
                      <FormItem>
                        <FormLabel>What communication goals would you like to achieve? *</FormLabel>
                        <FormDescription>
                          Select all that apply
                        </FormDescription>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {[
                            { id: "confidence", label: "Build confidence in public speaking" },
                            { id: "leadership", label: "Develop leadership skills" },
                            { id: "career", label: "Advance my career" },
                            { id: "presentation", label: "Improve presentation skills" },
                            { id: "networking", label: "Meet like-minded people" },
                            { id: "communication", label: "Better everyday communication" },
                            { id: "storytelling", label: "Learn storytelling techniques" },
                            { id: "fear", label: "Overcome fear of public speaking" },
                          ].map((goal) => (
                            <FormField
                              key={goal.id}
                              control={form.control}
                              name="communicationGoals"
                              render={({ field }) => {
                                return (
                                  <FormItem
                                    key={goal.id}
                                    className="flex flex-row items-start space-x-3 space-y-0"
                                  >
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(goal.id)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([...field.value, goal.id])
                                            : field.onChange(
                                                field.value?.filter(
                                                  (value) => value !== goal.id
                                                )
                                              );
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="text-sm font-normal">
                                      {goal.label}
                                    </FormLabel>
                                  </FormItem>
                                );
                              }}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="meetingPreference"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Meeting Schedule Preference</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="grid grid-cols-1 md:grid-cols-2 gap-3"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="weekday-morning" />
                              </FormControl>
                              <FormLabel className="font-normal">Weekday mornings</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="weekday-evening" />
                              </FormControl>
                              <FormLabel className="font-normal">Weekday evenings</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="weekend" />
                              </FormControl>
                              <FormLabel className="font-normal">Weekends</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="flexible" />
                              </FormControl>
                              <FormLabel className="font-normal">Flexible</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="additionalInfo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Information</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us anything else you'd like us to know about your goals, experience, or questions you might have..."
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Optional: Share any specific interests, concerns, or questions
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Agreement Section */}
              <div className="border-0 rounded-2xl p-8 bg-gradient-to-br from-gray-50 to-blue-50 shadow-xl border border-blue-100">
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="agreeToTerms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I agree to the terms and conditions *
                          </FormLabel>
                          <FormDescription>
                            I understand that this is an initial interest form and I may be contacted by club representatives. 
                            No membership commitment is made until I complete the full membership application and payment.
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="emailUpdates"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I would like to receive email updates about club meetings and events
                          </FormLabel>
                          <FormDescription>
                            You can unsubscribe at any time
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Payment Instructions */}
              <div className="border-0 rounded-2xl p-8 bg-gradient-to-br from-yellow-50 to-orange-50 shadow-xl border border-orange-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-3 rounded-2xl shadow-lg">
                    <DollarSign className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">Payment Instructions</h3>
                </div>

                <div className="space-y-6">
                  <div className="bg-white/80 p-6 rounded-2xl border border-orange-200">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      All new members of Hurstville Weekend Toastmasters are required to pay a one-time fee of <strong>AUD $50</strong> to Toastmasters International. 
                      This amount covers your official registration with Toastmasters International and is non-refundable.
                    </p>
                    
                    <p className="text-gray-700 leading-relaxed mb-4">
                      In addition, the club charges a monthly fee of <strong>AUD $16.50</strong>. These membership dues are paid twice a year by all members and are 
                      pro-rated from the month you join. For example, if you join in July, you will only pay the dues for July to September (three months), 
                      calculated at AUD $16.50 per month.
                    </p>

                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <h4 className="font-bold text-gray-800 mb-3">The main fee breakdown is as follows:</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• New member once-off Toastmasters International fee: <strong>AUD $50</strong></li>
                        <li>• Monthly pro-rata fee: <strong>AUD $16.50 × [number of months remaining in the current period]</strong></li>
                        <li>• Your total payment is therefore: <strong>AUD $50 + (AUD $16.50 × number of months remaining)</strong></li>
                      </ul>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      Membership periods run from October to March and April to September. When you join, you only pay for the months left in the current period.
                    </p>

                    <div className="bg-green-50 p-4 rounded-lg mb-4">
                      <h4 className="font-bold text-gray-800 mb-3">To make your payment, please use the following club bank account details:</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li><strong>Account Name:</strong> Hurstville Weekend Toastmasters</li>
                        <li><strong>BSB:</strong> 062184</li>
                        <li><strong>Account Number:</strong> 10108278</li>
                      </ul>
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                      After completing your payment, please take a screenshot of your payment receipt and email it to: 
                      <a href="mailto:tm.hurstville@gmail.com" className="text-blue-600 hover:text-blue-800 font-medium ml-1">
                        tm.hurstville@gmail.com
                      </a>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-8">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-700 hover:via-indigo-700 hover:to-cyan-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-12 py-4 text-xl font-bold"
                >
                  Submit Interest Form
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default JoinUsForm; 