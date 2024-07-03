import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Index = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold">Welcome to SaaS Startup</h1>
        <p className="text-xl text-muted-foreground">
          Revolutionizing the way you manage your business.
        </p>
        <Button size="lg" className="mt-4">
          Get Started
        </Button>
        <img
          src="https://placehold.co/600x400"
          alt="placeholder"
          className="mx-auto mt-8"
        />
      </section>

      {/* Features Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Feature 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of Feature 1.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of Feature 2.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of Feature 3.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Avatar src="https://placehold.co/100x100" alt="User 1" />
              <CardTitle>User 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p>"This product has changed my life!"</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Avatar src="https://placehold.co/100x100" alt="User 2" />
              <CardTitle>User 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>"I can't imagine working without it."</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Avatar src="https://placehold.co/100x100" alt="User 3" />
              <CardTitle>User 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p>"A must-have for any business."</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p>$10/month</p>
              <p>Feature A</p>
              <p>Feature B</p>
              <p>Feature C</p>
              <Button className="mt-4">Choose Plan</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pro Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p>$20/month</p>
              <p>Feature A</p>
              <p>Feature B</p>
              <p>Feature C</p>
              <p>Feature D</p>
              <Button className="mt-4">Choose Plan</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Enterprise Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p>$30/month</p>
              <p>Feature A</p>
              <p>Feature B</p>
              <p>Feature C</p>
              <p>Feature D</p>
              <p>Feature E</p>
              <Button className="mt-4">Choose Plan</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center space-y-4">
        <div className="space-x-4">
          <a href="/about" className="text-muted-foreground">
            About Us
          </a>
          <a href="/contact" className="text-muted-foreground">
            Contact
          </a>
          <a href="/privacy" className="text-muted-foreground">
            Privacy Policy
          </a>
        </div>
        <div className="space-x-4">
          <a href="https://facebook.com" className="text-muted-foreground">
            Facebook
          </a>
          <a href="https://twitter.com" className="text-muted-foreground">
            Twitter
          </a>
          <a href="https://linkedin.com" className="text-muted-foreground">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;