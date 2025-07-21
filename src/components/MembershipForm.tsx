import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronRight, ChevronsRight, Info } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MembershipForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Step 1: Personal Information Schema
  const personalInfoSchema = z.object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    middleName: z.string().optional(),
    organization: z.string().optional(),
    addressLine1: z.string().min(1, { message: "Address is required" }),
    addressLine2: z.string().optional(),
    city: z.string().min(1, { message: "City is required" }),
    stateProvince: z.string().min(1, { message: "State/Province is required" }),
    country: z.string().min(1, { message: "Country is required" }),
    postalCode: z.string().min(1, { message: "Postal code is required" }),
    homePhone: z.string().optional(),
    mobilePhone: z.string().min(1, { message: "Mobile phone is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    gender: z.enum(["male", "female", "non-binary", "decline"]),
    assistiveTechnology: z.boolean().default(false),
  });

  // Step 2: Membership Type Schema
  const membershipTypeSchema = z.object({
    membershipType: z.enum([
      "new",
      "dual",
      "transfer",
      "reinstated",
      "renewing",
    ]),
    transferDate: z.string().optional(),
    previousClubName: z.string().optional(),
    previousClubNumber: z.string().optional(),
    memberNumber: z.string().optional(),
  });

  // Step 3: Payment Information Schema
  const paymentInfoSchema = z.object({
    newMemberFee: z.string(),
    membershipDues: z.string(),
    membershipStartDate: z.string(),
    paymentMethod: z.enum(["creditCard", "check", "other"]),
    cardNumber: z.string().optional(),
    expirationDate: z.string().optional(),
    nameOnCard: z.string().optional(),
    checkNumber: z.string().optional(),
    otherPaymentDetails: z.string().optional(),
    billingAddressSameAsShipping: z.boolean().default(true),
    billingAddressLine1: z.string().optional(),
    billingAddressLine2: z.string().optional(),
    billingCity: z.string().optional(),
    billingStateProvince: z.string().optional(),
    billingCountry: z.string().optional(),
    billingPostalCode: z.string().optional(),
  });

  // Step 4: Agreement Schema
  const agreementSchema = z.object({
    sponsorLastName: z.string().optional(),
    sponsorFirstName: z.string().optional(),
    sponsorMemberNumber: z.string().optional(),
    agreementAccepted: z.boolean().refine((val) => val === true, {
      message: "You must accept the agreement to continue",
    }),
    contactConsent: z.object({
      mail: z.boolean().default(false),
      email: z.boolean().default(false),
      phone: z.boolean().default(false),
    }),
    nonEssentialCommunications: z.boolean().default(false),
  });

  // Form setup for each step
  const personalInfoForm = useForm({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      middleName: "",
      organization: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      stateProvince: "",
      country: "",
      postalCode: "",
      homePhone: "",
      mobilePhone: "",
      email: "",
      gender: "decline",
      assistiveTechnology: false,
    },
  });

  const membershipTypeForm = useForm({
    resolver: zodResolver(membershipTypeSchema),
    defaultValues: {
      membershipType: "new",
      transferDate: "",
      previousClubName: "",
      previousClubNumber: "",
      memberNumber: "",
    },
  });

  const paymentInfoForm = useForm({
    resolver: zodResolver(paymentInfoSchema),
    defaultValues: {
      newMemberFee: "20",
      membershipDues: "45",
      membershipStartDate: new Date().toISOString().split("T")[0],
      paymentMethod: "creditCard",
      cardNumber: "",
      expirationDate: "",
      nameOnCard: "",
      checkNumber: "",
      otherPaymentDetails: "",
      billingAddressSameAsShipping: true,
      billingAddressLine1: "",
      billingAddressLine2: "",
      billingCity: "",
      billingStateProvince: "",
      billingCountry: "",
      billingPostalCode: "",
    },
  });

  const agreementForm = useForm({
    resolver: zodResolver(agreementSchema),
    defaultValues: {
      sponsorLastName: "",
      sponsorFirstName: "",
      sponsorMemberNumber: "",
      agreementAccepted: false,
      contactConsent: {
        mail: false,
        email: false,
        phone: false,
      },
      nonEssentialCommunications: false,
    },
  });

  const handlePersonalInfoSubmit = (data) => {
    setFormData({ ...formData, personalInfo: data });
    setCurrentStep(2);
  };

  const handleMembershipTypeSubmit = (data) => {
    setFormData({ ...formData, membershipType: data });
    setCurrentStep(3);
  };

  const handlePaymentInfoSubmit = (data) => {
    setFormData({ ...formData, paymentInfo: data });
    setCurrentStep(4);
  };

  const handleAgreementSubmit = (data) => {
    setFormData({ ...formData, agreement: data });
    // In a real application, you would submit the form data to your backend here
    console.log("Form submitted:", { ...formData, agreement: data });
    setIsSubmitted(true);
  };

  const renderStepIndicator = () => {
    return (
      <div className="flex justify-center mb-8">
        <div className="flex items-center">
          {[1, 2, 3, 4].map((step) => (
            <React.Fragment key={step}>
              <div
                className={`rounded-full h-10 w-10 flex items-center justify-center border-2 ${
                  currentStep === step
                    ? "bg-primary text-primary-foreground border-primary"
                    : currentStep > step
                      ? "bg-green-100 text-green-700 border-green-500"
                      : "bg-muted text-muted-foreground border-muted-foreground"
                }`}
              >
                {currentStep > step ? <Check className="h-5 w-5" /> : step}
              </div>
              {step < 4 && (
                <div
                  className={`w-16 h-1 ${currentStep > step ? "bg-green-500" : "bg-muted"}`}
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  };

  const renderStepTitle = () => {
    switch (currentStep) {
      case 1:
        return "Personal Information";
      case 2:
        return "Membership Type";
      case 3:
        return "Payment Information";
      case 4:
        return "Agreement & Submission";
      default:
        return "";
    }
  };

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-4xl mx-auto bg-white">
        <CardHeader className="text-center bg-primary text-primary-foreground rounded-t-xl">
          <CardTitle className="text-2xl">Application Submitted!</CardTitle>
        </CardHeader>
        <CardContent className="pt-6 pb-8 px-8">
          <div className="flex flex-col items-center justify-center py-12">
            <div className="rounded-full bg-green-100 p-4 mb-4">
              <Check className="h-12 w-12 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
            <p className="text-center text-muted-foreground mb-6">
              Your membership application has been successfully submitted. A
              club officer will review your application and contact you soon.
            </p>
            <Button onClick={() => window.location.reload()}>
              Submit Another Application
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-background p-4">
      {renderStepIndicator()}

      <Card className="w-full">
        <CardHeader className="bg-primary text-primary-foreground rounded-t-xl">
          <CardTitle className="text-xl">{renderStepTitle()}</CardTitle>
          <CardDescription className="text-primary-foreground/80">
            Step {currentStep} of 4
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-6 pb-2 px-8">
          {currentStep === 1 && (
            <Form {...personalInfoForm}>
              <form
                onSubmit={personalInfoForm.handleSubmit(
                  handlePersonalInfoSubmit,
                )}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FormField
                    control={personalInfoForm.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name*</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={personalInfoForm.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name*</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={personalInfoForm.control}
                    name="middleName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Middle Name</FormLabel>
                        <FormControl>
                          <Input placeholder="A" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={personalInfoForm.control}
                  name="organization"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Organization/In care of</FormLabel>
                      <FormControl>
                        <Input placeholder="Company Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={personalInfoForm.control}
                    name="addressLine1"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address Line 1*</FormLabel>
                        <FormControl>
                          <Input placeholder="123 Main St" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={personalInfoForm.control}
                    name="addressLine2"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address Line 2</FormLabel>
                        <FormControl>
                          <Input placeholder="Apt 4B" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <FormField
                    control={personalInfoForm.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City*</FormLabel>
                        <FormControl>
                          <Input placeholder="New York" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={personalInfoForm.control}
                    name="stateProvince"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>State/Province*</FormLabel>
                        <FormControl>
                          <Input placeholder="NY" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={personalInfoForm.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Country*</FormLabel>
                        <FormControl>
                          <Input placeholder="USA" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={personalInfoForm.control}
                    name="postalCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Postal Code*</FormLabel>
                        <FormControl>
                          <Input placeholder="10001" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FormField
                    control={personalInfoForm.control}
                    name="homePhone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Home Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="(555) 123-4567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={personalInfoForm.control}
                    name="mobilePhone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mobile Phone*</FormLabel>
                        <FormControl>
                          <Input placeholder="(555) 987-6543" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={personalInfoForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address*</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="john.doe@example.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={personalInfoForm.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gender</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-row space-x-4"
                        >
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="male" />
                            </FormControl>
                            <FormLabel className="font-normal">Male</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="female" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Female
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="non-binary" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Non-binary
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="decline" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Decline to respond
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={personalInfoForm.control}
                  name="assistiveTechnology"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          I use assistive technology (such as a screen reader)
                          to view my educational materials
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                <div className="flex justify-end">
                  <Button type="submit" className="w-full md:w-auto">
                    Next <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            </Form>
          )}

          {currentStep === 2 && (
            <Form {...membershipTypeForm}>
              <form
                onSubmit={membershipTypeForm.handleSubmit(
                  handleMembershipTypeSubmit,
                )}
                className="space-y-6"
              >
                <FormField
                  control={membershipTypeForm.control}
                  name="membershipType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Membership Type*</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="grid grid-cols-1 md:grid-cols-3 gap-4"
                        >
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="new" />
                            </FormControl>
                            <FormLabel className="font-normal">New</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="dual" />
                            </FormControl>
                            <FormLabel className="font-normal">Dual</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="transfer" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Transfer
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="reinstated" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Reinstated (break in membership)
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="renewing" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Renewing (no break in membership)
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {membershipTypeForm.watch("membershipType") === "transfer" && (
                  <div className="border rounded-md p-4 space-y-4">
                    <h3 className="font-medium">Transfer Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={membershipTypeForm.control}
                        name="transferDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Date of Transfer (MM/YYYY)*</FormLabel>
                            <FormControl>
                              <Input placeholder="06/2023" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={membershipTypeForm.control}
                        name="previousClubName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Previous Club Name*</FormLabel>
                            <FormControl>
                              <Input placeholder="Speakers Club" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={membershipTypeForm.control}
                        name="previousClubNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Previous Club Number*</FormLabel>
                            <FormControl>
                              <Input placeholder="12345" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={membershipTypeForm.control}
                        name="memberNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Member Number*</FormLabel>
                            <FormControl>
                              <Input placeholder="987654" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                )}

                <div className="flex justify-between">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setCurrentStep(1)}
                  >
                    Back
                  </Button>
                  <Button type="submit">
                    Next <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            </Form>
          )}

          {currentStep === 3 && (
            <Form {...paymentInfoForm}>
              <form
                onSubmit={paymentInfoForm.handleSubmit(handlePaymentInfoSubmit)}
                className="space-y-6"
              >
                <div className="bg-muted/50 p-4 rounded-md mb-6">
                  <h3 className="font-medium mb-2">
                    Toastmasters International Dues and Fees
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={paymentInfoForm.control}
                      name="newMemberFee"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>New Member Fee (US$20)*</FormLabel>
                          <FormControl>
                            <Input type="text" {...field} />
                          </FormControl>
                          <FormDescription>
                            Covers the cost of the first education path, online
                            copy of The Navigator, and processing
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={paymentInfoForm.control}
                      name="membershipDues"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Membership Dues*</FormLabel>
                          <FormControl>
                            <Input type="text" {...field} />
                          </FormControl>
                          <FormDescription>
                            Pro-rated based on your start month
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={paymentInfoForm.control}
                    name="membershipStartDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Date my membership began*</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={paymentInfoForm.control}
                  name="paymentMethod"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Payment Method*</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="grid grid-cols-1 md:grid-cols-3 gap-4"
                        >
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="creditCard" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Credit Card
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="check" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Check or Money Order
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="other" />
                            </FormControl>
                            <FormLabel className="font-normal">Other</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {paymentInfoForm.watch("paymentMethod") === "creditCard" && (
                  <div className="border rounded-md p-4 space-y-4">
                    <h3 className="font-medium">Credit Card Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={paymentInfoForm.control}
                        name="cardNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Card Number*</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="•••• •••• •••• ••••"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={paymentInfoForm.control}
                        name="expirationDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Expiration Date*</FormLabel>
                            <FormControl>
                              <Input placeholder="MM/YY" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={paymentInfoForm.control}
                        name="nameOnCard"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel>Name on Card*</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                )}

                {paymentInfoForm.watch("paymentMethod") === "check" && (
                  <div className="border rounded-md p-4 space-y-4">
                    <h3 className="font-medium">Check Information</h3>
                    <FormField
                      control={paymentInfoForm.control}
                      name="checkNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Check or Money Order Number*</FormLabel>
                          <FormControl>
                            <Input placeholder="12345" {...field} />
                          </FormControl>
                          <FormDescription>
                            Check or money order must be for U.S. funds drawn on
                            a U.S. bank
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {paymentInfoForm.watch("paymentMethod") === "other" && (
                  <div className="border rounded-md p-4 space-y-4">
                    <h3 className="font-medium">Other Payment Method</h3>
                    <FormField
                      control={paymentInfoForm.control}
                      name="otherPaymentDetails"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Payment Details*</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Please describe your payment method"
                              className="min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                <FormField
                  control={paymentInfoForm.control}
                  name="billingAddressSameAsShipping"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          Billing Address is the same as Shipping Address
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                {!paymentInfoForm.watch("billingAddressSameAsShipping") && (
                  <div className="border rounded-md p-4 space-y-4">
                    <h3 className="font-medium">Billing Address</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={paymentInfoForm.control}
                        name="billingAddressLine1"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Address Line 1*</FormLabel>
                            <FormControl>
                              <Input placeholder="123 Main St" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={paymentInfoForm.control}
                        name="billingAddressLine2"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Address Line 2</FormLabel>
                            <FormControl>
                              <Input placeholder="Apt 4B" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <FormField
                        control={paymentInfoForm.control}
                        name="billingCity"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>City*</FormLabel>
                            <FormControl>
                              <Input placeholder="New York" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={paymentInfoForm.control}
                        name="billingStateProvince"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>State/Province*</FormLabel>
                            <FormControl>
                              <Input placeholder="NY" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={paymentInfoForm.control}
                        name="billingCountry"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Country*</FormLabel>
                            <FormControl>
                              <Input placeholder="USA" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={paymentInfoForm.control}
                        name="billingPostalCode"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Postal Code*</FormLabel>
                            <FormControl>
                              <Input placeholder="10001" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                )}

                <div className="flex justify-between">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setCurrentStep(2)}
                  >
                    Back
                  </Button>
                  <Button type="submit">
                    Next <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            </Form>
          )}

          {currentStep === 4 && (
            <Form {...agreementForm}>
              <form
                onSubmit={agreementForm.handleSubmit(handleAgreementSubmit)}
                className="space-y-6"
              >
                <div className="border rounded-md p-4 space-y-4">
                  <h3 className="font-medium">
                    Sponsor Information (Optional)
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={agreementForm.control}
                      name="sponsorLastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Sponsor's Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Smith" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={agreementForm.control}
                      name="sponsorFirstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Sponsor's First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Jane" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={agreementForm.control}
                      name="sponsorMemberNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Sponsor's Member Number</FormLabel>
                          <FormControl>
                            <Input placeholder="123456" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="border rounded-md p-4 space-y-4">
                  <h3 className="font-medium">A Toastmaster's Promise</h3>
                  <div className="text-sm space-y-2">
                    <p>
                      As a member of Toastmasters International and my club, I
                      promise:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>To attend club meetings regularly</li>
                      <li>
                        To prepare all of my projects to the best of my ability,
                        basing them on the Toastmasters education program
                      </li>
                      <li>To prepare for and fulfill meeting assignments</li>
                      <li>
                        To provide fellow members with helpful, constructive
                        evaluations
                      </li>
                      <li>
                        To help the club maintain the positive, friendly
                        environment necessary for all members to learn and grow
                      </li>
                      <li>
                        To serve my club as an officer when called upon to do so
                      </li>
                      <li>
                        To treat my fellow club members and our guests with
                        respect and courtesy
                      </li>
                      <li>
                        To bring guests to club meetings so they can see the
                        benefits Toastmasters membership offers
                      </li>
                      <li>
                        To adhere to the guidelines and rules for all
                        Toastmasters education and recognition programs
                      </li>
                      <li>
                        To act within Toastmasters' core values of integrity,
                        respect, service, and excellence during the conduct of
                        all Toastmasters activities
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border rounded-md p-4 space-y-4">
                  <h3 className="font-medium">
                    Member's Agreement and Release
                  </h3>
                  <div className="text-sm space-y-2 max-h-40 overflow-y-auto p-2 border rounded">
                    <p>
                      Consistent with my desire to take personal responsibility
                      for my conduct, individually and as a member of a
                      Toastmasters club, I agree to abide by the principles
                      contained in A Toastmaster's Promise, the Toastmasters
                      International Governing Documents, and my club. I will
                      refrain from any form of discrimination, harassment,
                      bullying, derogatory, illegal, or unethical conduct, and I
                      understand that if I engage in such conduct, I may be
                      responsible to reimburse Toastmasters International, my
                      club or other clubs, or other individuals involved with
                      Toastmasters, for any damages, losses, or costs resulting
                      from my conduct. Understanding that Toastmasters programs
                      are conducted by volunteers who cannot be effectively
                      screened or supervised by Toastmasters International or
                      its clubs, I release and discharge Toastmasters
                      International, its clubs, governing bodies, officers,
                      employees, agents, and representatives from any liability
                      for the intentional or negligent acts or omissions of any
                      member or officer of my club or other clubs, or any
                      officer of Toastmasters International. Should a dispute of
                      some nature arise, I expressly agree to resolve all
                      disputes, claims, and charges relating to Toastmasters,
                      Districts, clubs, and Toastmasters members in accordance
                      with Protocol 3.0: Ethics and Conduct.
                    </p>
                    <p>
                      By submitting this application, I expressly agree to the
                      following:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        The collection, use, and processing of the personal
                        information I provide to Toastmasters in this Membership
                        Application for the purposes of organization
                        administration, payment of my dues, and inclusion of my
                        contact information in a members' directory that will be
                        distributed to members and employees of Toastmasters. In
                        addition, the collection, use, and processing of my
                        personal information collected by Toastmasters
                        International through Toastmasters' website and by
                        electronic communications.
                      </li>
                      <li>
                        That my information may be accessed and used by
                        Toastmasters, its employees and agents, District
                        leaders, and club officers.
                      </li>
                      <li>
                        Maintain changes to my personal contact information to
                        ensure it is accurate and current by updating my
                        personal profile page located on the Toastmasters
                        International website: www.toastmasters.org/Login. I
                        understand that the majority of the data requested in
                        this application is necessary for administrative and
                        planning purposes.
                      </li>
                    </ul>
                  </div>
                </div>

                <FormField
                  control={agreementForm.control}
                  name="agreementAccepted"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 bg-muted/30">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          I accept the terms and conditions of A Toastmaster's
                          Promise and the Member's Agreement and Release*
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                <div className="border rounded-md p-4 space-y-4">
                  <h3 className="font-medium">Contact Preferences</h3>
                  <p className="text-sm">
                    Occasionally we would like to contact you with details of
                    services, educational updates, and organizational updates.
                    If you consent to us contacting you for this purpose, please
                    check the box below corresponding to acceptable contact
                    methods:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={agreementForm.control}
                      name="contactConsent.mail"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel>Mail</FormLabel>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={agreementForm.control}
                      name="contactConsent.email"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel>Email</FormLabel>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={agreementForm.control}
                      name="contactConsent.phone"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel>Phone</FormLabel>
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={agreementForm.control}
                    name="nonEssentialCommunications"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>
                          I would rather not receive non-essential
                          communications from Toastmasters
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex justify-between">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setCurrentStep(3)}
                  >
                    Back
                  </Button>
                  <Button type="submit">
                    Submit Application{" "}
                    <ChevronsRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            </Form>
          )}
        </CardContent>

        <CardFooter className="flex flex-col items-start pt-0 px-8 pb-6">
          <div className="flex items-center text-sm text-muted-foreground">
            <Info className="h-4 w-4 mr-2" />
            <span>Fields marked with * are required</span>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default MembershipForm;
