
import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    teamName: '',
    leadName: '',
    leadEmail: '',
    memberNames: '',
    challengeTrack: '',
    onePagerFile: null as File | null,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, challengeTrack: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, onePagerFile: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with delay
    setTimeout(() => {
      toast({
        title: "Registration Submitted",
        description: "Thank you for registering for Vibe-A-Thon! We'll be in touch soon.",
      });
      setIsSubmitting(false);
      setFormData({
        teamName: '',
        leadName: '',
        leadEmail: '',
        memberNames: '',
        challengeTrack: '',
        onePagerFile: null,
      });
    }, 1500);
  };

  return (
    <section className="section-padding bg-wonderbotz-green/10" id="registration">
      <div className="container">
        <h2 className="text-3xl font-bold text-wonderbotz-dark-gray text-center mb-12">
          Register Your Team
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="teamName">Team Name *</Label>
                <Input 
                  id="teamName"
                  name="teamName"
                  value={formData.teamName}
                  onChange={handleInputChange}
                  required
                  className="border-wonderbotz-dark-gray border-2 h-11"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="leadName">Team Lead Name *</Label>
                <Input 
                  id="leadName"
                  name="leadName"
                  value={formData.leadName}
                  onChange={handleInputChange}
                  required
                  className="border-wonderbotz-dark-gray border-2 h-11"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="leadEmail">Team Lead Email *</Label>
                <Input 
                  id="leadEmail"
                  name="leadEmail"
                  type="email"
                  value={formData.leadEmail}
                  onChange={handleInputChange}
                  required
                  className="border-wonderbotz-dark-gray border-2 h-11"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="memberNames">Team Member Names (comma separated) *</Label>
                <Textarea 
                  id="memberNames"
                  name="memberNames"
                  value={formData.memberNames}
                  onChange={handleInputChange}
                  required
                  className="border-wonderbotz-dark-gray border-2"
                  rows={3}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="challengeTrack">Challenge Track *</Label>
                <Select
                  value={formData.challengeTrack}
                  onValueChange={handleSelectChange}
                  required
                >
                  <SelectTrigger className="border-wonderbotz-dark-gray border-2 h-11">
                    <SelectValue placeholder="Select a track" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="agentic-ai">Agentic AI for Client Operations</SelectItem>
                    <SelectItem value="process-automation">Client Process Automation</SelectItem>
                    <SelectItem value="decisioning">AI-Augmented Decisioning</SelectItem>
                    <SelectItem value="client-specific">Client-Specific Innovation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="onePagerFile">One-Pager Upload (PDF) *</Label>
                <Input 
                  id="onePagerFile"
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  required
                  className="border-wonderbotz-dark-gray border-2"
                />
                <p className="text-xs text-wonderbotz-gray">Maximum file size: 5MB</p>
              </div>
              
              <Button 
                type="submit" 
                className="button-orange w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Registration'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
