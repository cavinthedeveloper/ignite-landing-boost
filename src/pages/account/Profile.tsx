import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileQuickActions } from "@/components/MobileQuickActions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Link } from "react-router-dom";
import { ArrowLeft, User, Mail, Phone, MapPin, Shield, Bell, Eye } from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-20 sm:pb-0">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Link to="/account" className="p-2 hover:bg-muted rounded-lg transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold">Profile Settings</h1>
              <p className="text-muted-foreground">Manage your personal information and preferences</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Picture & Basic Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Profile Picture
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="w-12 h-12 text-primary" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold">John Doe</h3>
                    <p className="text-sm text-muted-foreground">Premium Member</p>
                  </div>
                  <Button variant="outline" className="w-full">Change Photo</Button>
                </div>
              </CardContent>
            </Card>

            {/* Personal Information */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" defaultValue="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" defaultValue="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Address
                  </Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" defaultValue="john.doe@example.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Phone Number
                  </Label>
                  <Input id="phone" type="tel" placeholder="+44 7123 456789" defaultValue="+44 7123 456789" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth">Date of Birth</Label>
                  <Input id="dateOfBirth" type="date" defaultValue="1990-05-15" />
                </div>
                
                <Button className="w-full md:w-auto">Save Changes</Button>
              </CardContent>
            </Card>

            {/* Account Security */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  <Eye className="w-4 h-4 mr-2" />
                  Change Password
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Enable Two-Factor Authentication
                </Button>
                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground mb-2">Last login:</p>
                  <p className="text-sm font-medium">Today, 2:30 PM</p>
                </div>
              </CardContent>
            </Card>

            {/* Preferences */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5" />
                  Notification Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Order Updates</p>
                    <p className="text-sm text-muted-foreground">Receive notifications about your orders</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Promotional Emails</p>
                    <p className="text-sm text-muted-foreground">Get notified about special offers and deals</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">New Product Alerts</p>
                    <p className="text-sm text-muted-foreground">Be the first to know about new arrivals</p>
                  </div>
                  <Switch />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Weekly Newsletter</p>
                    <p className="text-sm text-muted-foreground">Receive our weekly newsletter with tips and recipes</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">SMS Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive important updates via SMS</p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Account Actions */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-destructive">Account Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" className="flex-1">
                  Download My Data
                </Button>
                <Button variant="destructive" className="flex-1">
                  Delete Account
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Please note that account deletion is permanent and cannot be undone.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
      <MobileQuickActions />
    </div>
  );
};

export default Profile;