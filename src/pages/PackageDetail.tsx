
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Check, X, Calendar, MapPin, ArrowLeft } from "lucide-react";
import { packages } from "@/data/packages";
import { useState } from "react";
import { motion } from "framer-motion";

import { useToast } from "@/components/ui/use-toast";

const PackageDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  // Use "slug" style matching or just index if id matches
  const pkg = packages.find((p) => p.id === id);

  const [formData, setFormData] = useState({
    title: "Mr.",
    fullName: "",
    country: "",
    phone: "",
    email: "",
    adults: 1,
    children: 0,
    arrivalDate: "",
    departureDate: "",
    transportation: "no",
    packageService: "no",
    extras: "",
    enquiry: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking Data:", formData);
    toast({
      title: "Booking Request Sent",
      description: "We have received your booking request and will contact you shortly.",
    });
  };

  if (!pkg) {
    return (
      <Layout>
        <div className="pt-32 pb-20 text-center">
          <h2 className="text-2xl font-serif mb-4">Package not found</h2>
          <Link to="/packages" className="text-primary hover:underline">
            Back to Packages
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="pt-32 section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link to="/packages" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Back to Packages
          </Link>

          {/* Title Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground uppercase tracking-wide">
              {pkg.title}
            </h1>
            <div className="mt-4 flex justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar size={16} className="text-primary" /> {pkg.duration}
              </span>
              <span className="flex items-center gap-1">
                <MapPin size={16} className="text-primary" /> {pkg.location}
              </span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column: Details */}
            <div className="lg:col-span-2 space-y-10">
              {/* Description */}
              <div className="prose max-w-none text-muted-foreground">
                 <p className="text-lg leading-relaxed">{pkg.longDescription}</p>
              </div>

              {/* Itinerary */}
              <div>
                <h3 className="text-xl font-serif font-bold text-primary mb-4 uppercase tracking-wider">Itinerary</h3>
                <div className="space-y-4">
                  {pkg.itinerary?.map((item, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed">
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              {/* Pricing Table */}
              <div>
                <h3 className="text-xl font-serif font-bold text-primary mb-4 uppercase tracking-wider">Price of Package</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border">
                    <thead>
                      <tr className="bg-primary text-primary-foreground">
                        <th className="p-3 text-left border border-border/20">Number Of Person</th>
                        <th className="p-3 text-left border border-border/20">Prices of the Package</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pkg.priceTable?.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-accent/30" : "bg-transparent"}>
                          <td className="p-3 border border-border text-foreground font-medium">{row.pax}</td>
                          <td className="p-3 border border-border text-primary font-bold">{row.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Included / Excluded */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                   <h3 className="text-xl font-serif font-bold text-primary mb-4 uppercase tracking-wider">Included Services:</h3>
                   <ul className="space-y-2">
                     {pkg.included.map((item, i) => (
                       <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                         <Check size={16} className="text-green-500 mt-0.5 shrink-0" />
                         <span>{item}</span>
                       </li>
                     ))}
                   </ul>
                </div>
                <div>
                   <h3 className="text-xl font-serif font-bold text-destructive mb-4 uppercase tracking-wider">Excluded Services:</h3>
                   <ul className="space-y-2">
                     {pkg.notIncluded.map((item, i) => (
                       <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                         <X size={16} className="text-destructive mt-0.5 shrink-0" />
                         <span>{item}</span>
                       </li>
                     ))}
                   </ul>
                </div>
              </div>

               {/* Please Note */}
               <div className="bg-accent/20 p-6 rounded-lg border-l-4 border-primary">
                 <h4 className="flex items-center gap-2 font-serif font-bold text-foreground mb-2">
                    <span className="text-primary text-xl">✍</span> PLEASE NOTE:
                 </h4>
                 <p className="text-sm text-muted-foreground italic">
                   This itinerary can be re-adjusted based on your Arrival or Departure Flight schedule or your request.
                 </p>
               </div>
            </div>

            {/* Right Column: Booking Form */}
            <div className="lg:col-span-1">
              <div className="bg-card glass sticky top-24 rounded-xl shadow-lg border border-border/50 overflow-hidden">
                <div className="bg-primary/5 p-4 border-b border-border/50">
                  <h3 className="text-xl font-serif font-bold text-primary uppercase tracking-wide">Booking Form</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Our team would be happy to assist you with any enquiries. Please enter fields marked with an asterisk (*) are mandatory.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1">Tour Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-accent/20 border border-input rounded px-3 py-2 text-sm text-muted-foreground"
                      value={pkg.title}
                      readOnly
                    />
                  </div>

                  <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-1">
                       <label className="block text-xs font-bold text-foreground mb-1">Title</label>
                       <select 
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="w-full bg-background border border-input rounded px-2 py-2 text-sm focus:ring-1 focus:ring-primary outline-none"
                       >
                         <option>Mr.</option>
                         <option>Mrs.</option>
                         <option>Ms.</option>
                         <option>Dr.</option>
                       </select>
                    </div>
                    <div className="col-span-3">
                       <label className="block text-xs font-bold text-foreground mb-1">Full Name</label>
                       <input 
                         type="text"
                         name="fullName"
                         value={formData.fullName}
                         onChange={handleInputChange}
                         className="w-full bg-background border border-input rounded px-3 py-2 text-sm focus:ring-1 focus:ring-primary outline-none"
                         required
                       />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1">Country</label>
                    <input 
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full bg-background border border-input rounded px-3 py-2 text-sm focus:ring-1 focus:ring-primary outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1">Phone Number</label>
                    <input 
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-background border border-input rounded px-3 py-2 text-sm focus:ring-1 focus:ring-primary outline-none"
                      required
                    />
                  </div>

                  <div>
                     <label className="block text-xs font-bold text-foreground mb-1">Email</label>
                     <input 
                       type="email"
                       name="email"
                       value={formData.email}
                       onChange={handleInputChange}
                       className="w-full bg-background border border-input rounded px-3 py-2 text-sm focus:ring-1 focus:ring-primary outline-none"
                       required
                     />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-foreground mb-1">Number Of Adults</label>
                      <input 
                        type="number"
                        min="1"
                        name="adults"
                        value={formData.adults}
                        onChange={handleInputChange}
                        className="w-full bg-background border border-input rounded px-3 py-2 text-sm focus:ring-1 focus:ring-primary outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-foreground mb-1">Number Of Child</label>
                      <input 
                        type="number"
                        min="0"
                        name="children"
                        value={formData.children}
                        onChange={handleInputChange}
                        className="w-full bg-background border border-input rounded px-3 py-2 text-sm focus:ring-1 focus:ring-primary outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-foreground mb-1">Arrival Date</label>
                      <input 
                        type="date"
                        name="arrivalDate"
                        value={formData.arrivalDate}
                        onChange={handleInputChange}
                        className="w-full bg-background border border-input rounded px-3 py-2 text-sm focus:ring-1 focus:ring-primary outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-foreground mb-1">Departure Date</label>
                      <input 
                        type="date"
                        name="departureDate"
                        value={formData.departureDate}
                        onChange={handleInputChange}
                        className="w-full bg-background border border-input rounded px-3 py-2 text-sm focus:ring-1 focus:ring-primary outline-none"
                      />
                    </div>
                  </div>

                  <div>
                     <label className="block text-xs font-bold text-foreground mb-2">Transportation</label>
                     <div className="flex gap-4">
                        <label className="flex items-center gap-2 text-sm cursor-pointer">
                          <input 
                            type="radio" 
                            name="transportation" 
                            value="yes"
                            checked={formData.transportation === "yes"}
                            onChange={() => handleRadioChange("transportation", "yes")}
                            className="text-primary focus:ring-primary"
                          /> Yes
                        </label>
                        <label className="flex items-center gap-2 text-sm cursor-pointer">
                          <input 
                            type="radio" 
                            name="transportation" 
                            value="no"
                            checked={formData.transportation === "no"}
                            onChange={() => handleRadioChange("transportation", "no")}
                            className="text-primary focus:ring-primary"
                          /> No
                        </label>
                     </div>
                  </div>

                  <div>
                     <label className="block text-xs font-bold text-foreground mb-2">Package Service</label>
                     <div className="flex gap-4">
                        <label className="flex items-center gap-2 text-sm cursor-pointer">
                          <input 
                            type="radio" 
                            name="packageService" 
                            value="yes"
                            checked={formData.packageService === "yes"}
                            onChange={() => handleRadioChange("packageService", "yes")}
                            className="text-primary focus:ring-primary"
                          /> Yes
                        </label>
                        <label className="flex items-center gap-2 text-sm cursor-pointer">
                          <input 
                            type="radio" 
                            name="packageService" 
                            value="no"
                            checked={formData.packageService === "no"}
                            onChange={() => handleRadioChange("packageService", "no")}
                            className="text-primary focus:ring-primary"
                          /> No
                        </label>
                     </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1">Tour Extras</label>
                    <select 
                      name="extras"
                      value={formData.extras}
                      onChange={handleInputChange}
                      className="w-full bg-background border border-input rounded px-3 py-2 text-sm focus:ring-1 focus:ring-primary outline-none"
                    >
                      <option value="">-- Select Extras --</option>
                      <option value="guide">Guide</option>
                      <option value="meal">Meal</option>
                    </select>
                  </div>

                   <div>
                    <label className="block text-xs font-bold text-foreground mb-1">Enquiry</label>
                    <textarea 
                      rows={3}
                      name="enquiry"
                      value={formData.enquiry}
                      onChange={handleInputChange}
                      className="w-full bg-background border border-input rounded px-3 py-2 text-sm focus:ring-1 focus:ring-primary outline-none resize-none"
                    ></textarea>
                  </div>

                  <button className="w-full btn-gold mt-4 uppercase tracking-wide text-sm">
                    Book Now
                  </button>

                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PackageDetail;
