"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { site } from "@/lib/site-data";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Audit request form (demonstration only)</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-sm text-muted-foreground">
          This form does not submit to a backend, analytics service, or API. No data leaves this page.
        </p>
        {submitted ? (
          <div className="rounded-lg bg-muted p-6 text-center">
            <p className="font-medium">Thank you for your interest.</p>
            <p className="mt-2 text-sm text-muted-foreground">
              This form is for demonstration only. Please email {site.email} to reach BrandOps.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Work email</Label>
              <Input id="email" name="email" type="email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input id="company" name="company" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">What do you want to improve?</Label>
              <Textarea id="message" name="message" rows={4} />
            </div>
            <Button type="submit" className="w-full">Request audit</Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
