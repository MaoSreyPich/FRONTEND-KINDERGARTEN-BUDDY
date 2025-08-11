<template>
  <div class="container">
    <div class="form-card">
      <div class="header">
        <h1>Student Application</h1>
        <div class="subtitle">Academic Enrollment Form</div>
      </div>

      <form @submit.prevent="handleSubmit">
        <!-- Student Information -->
        <div class="section-title">Student Information</div>
        <div class="form-grid">
          <div class="form-group">
            <label for="firstName">First Name <span class="required">*</span></label>
            <input 
              type="text" 
              id="firstName" 
              v-model="form.firstName" 
              required
            />
          </div>
          <div class="form-group">
            <label for="lastName">Last Name <span class="required">*</span></label>
            <input 
              type="text" 
              id="lastName" 
              v-model="form.lastName" 
              required
            />
          </div>
          <div class="form-group">
            <label for="gender">Gender</label>
            <select id="gender" v-model="form.gender">
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input 
              type="number" 
              id="age" 
              v-model.number="form.age" 
              min="1" 
              max="120"
            />
          </div>
          <div class="form-group">
            <label for="placeOfBirth">Place of Birth</label>
            <input 
              type="text" 
              id="placeOfBirth" 
              v-model="form.placeOfBirth"
            />
          </div>
          <div class="form-group">
            <label for="dateOfBirth">Date of Birth</label>
            <input 
              type="date" 
              id="dateOfBirth" 
              v-model="form.dateOfBirth"
            />
          </div>
        </div>

        <div class="form-grid">
          <div class="form-group full-width">
            <label for="healthNote">Health Notes</label>
            <textarea 
              id="healthNote" 
              v-model="form.healthNote" 
              placeholder="Any medical conditions, allergies, or health information we should be aware of..."
            ></textarea>
          </div>
          <div class="form-group full-width">
            <label for="specialRequests">Special Requests</label>
            <textarea 
              id="specialRequests" 
              v-model="form.specialRequests" 
              placeholder="Any special accommodations or requests..."
            ></textarea>
          </div>
        </div>

        <!-- Father Information -->
        <div class="section-title">Father Information</div>
        <div class="form-grid">
          <div class="form-group">
            <label for="fatherFirstName">First Name</label>
            <input 
              type="text" 
              id="fatherFirstName" 
              v-model="form.father.firstName"
            />
          </div>
          <div class="form-group">
            <label for="fatherLastName">Last Name</label>
            <input 
              type="text" 
              id="fatherLastName" 
              v-model="form.father.lastName"
            />
          </div>
          <div class="form-group">
            <label for="fatherJob">Occupation</label>
            <input 
              type="text" 
              id="fatherJob" 
              v-model="form.father.job"
            />
          </div>
          <div class="form-group">
            <label for="fatherAge">Age</label>
            <input 
              type="number" 
              id="fatherAge" 
              v-model.number="form.father.age" 
              min="1" 
              max="120"
            />
          </div>
        </div>

        <!-- Mother Information -->
        <div class="section-title">Mother Information</div>
        <div class="form-grid">
          <div class="form-group">
            <label for="motherFirstName">First Name</label>
            <input 
              type="text" 
              id="motherFirstName" 
              v-model="form.mother.firstName"
            />
          </div>
          <div class="form-group">
            <label for="motherLastName">Last Name</label>
            <input 
              type="text" 
              id="motherLastName" 
              v-model="form.mother.lastName"
            />
          </div>
          <div class="form-group">
            <label for="motherJob">Occupation</label>
            <input 
              type="text" 
              id="motherJob" 
              v-model="form.mother.job"
            />
          </div>
          <div class="form-group">
            <label for="motherAge">Age</label>
            <input 
              type="number" 
              id="motherAge" 
              v-model.number="form.mother.age" 
              min="1" 
              max="120"
            />
          </div>
        </div>

        <!-- Guardian Information -->
        <div class="section-title">Guardian Information</div>
        <div class="form-grid">
          <div class="form-group">
            <label for="guardianFirstName">First Name</label>
            <input 
              type="text" 
              id="guardianFirstName" 
              v-model="form.guardian.firstName"
            />
          </div>
          <div class="form-group">
            <label for="guardianLastName">Last Name</label>
            <input 
              type="text" 
              id="guardianLastName" 
              v-model="form.guardian.lastName"
            />
          </div>
          <div class="form-group">
            <label for="guardianJob">Occupation</label>
            <input 
              type="text" 
              id="guardianJob" 
              v-model="form.guardian.job"
            />
          </div>
          <div class="form-group">
            <label for="guardianAge">Age</label>
            <input 
              type="number" 
              id="guardianAge" 
              v-model.number="form.guardian.age" 
              min="1" 
              max="120"
            />
          </div>
          <div class="form-group">
            <label for="guardianGender">Gender</label>
            <select id="guardianGender" v-model="form.guardian.gender">
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div class="form-group">
            <label for="guardianRelationship">Relationship to Student</label>
            <input 
              type="text" 
              id="guardianRelationship" 
              v-model="form.guardian.relationship" 
              placeholder="e.g., Uncle, Aunt, Grandparent"
            />
          </div>
        </div>

        <div class="form-grid">
          <div class="form-group full-width">
            <label for="guardianAddress">Guardian Address</label>
            <textarea 
              id="guardianAddress" 
              v-model="form.guardian.address" 
              placeholder="Complete address including street, city, state, postal code..."
            ></textarea>
          </div>
        </div>

        <!-- Contact Information -->
        <div class="section-title">Contact Information</div>
        <div class="form-grid">
          <div class="form-group full-width">
            <label for="currentAddress">Current Address <span class="required">*</span></label>
            <textarea 
              id="currentAddress" 
              v-model="form.currentAddress" 
              placeholder="Complete address including street, city, state, postal code..." 
              required
            ></textarea>
          </div>
          <div class="form-group">
            <label for="phone">Phone Number <span class="required">*</span></label>
            <input 
              type="tel" 
              id="phone" 
              v-model="form.phone" 
              placeholder="+1 (555) 123-4567" 
              required
            />
          </div>
          <div class="form-group">
            <label for="email">Email Address <span class="required">*</span></label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email" 
              placeholder="student@example.com" 
              required
            />
          </div>
        </div>

        <!-- Application Status -->
        <div class="section-title">Application Status</div>
        <div class="form-grid">
          <div class="form-group">
            <label for="status">Status</label>
            <select id="status" v-model="form.status">
              <option value="pending">Pending</option>
              <option value="accepted">Accepted</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>

        <button type="submit" class="submit-btn" :disabled="isSubmitting">
          {{ isSubmitting ? 'Submitting...' : 'Submit Application' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'StudentApplicationForm',
  setup() {
    const isSubmitting = ref(false)
    
    const form = ref({
      firstName: '',
      lastName: '',
      gender: '',
      age: null,
      placeOfBirth: '',
      dateOfBirth: '',
      healthNote: '',
      specialRequests: '',
      father: {
        firstName: '',
        lastName: '',
        job: '',
        age: null,
      },
      mother: {
        firstName: '',
        lastName: '',
        job: '',
        age: null,
      },
      guardian: {
        firstName: '',
        lastName: '',
        job: '',
        age: null,
        gender: '',
        relationship: '',
        address: '',
      },
      currentAddress: '',
      phone: '',
      email: '',
      status: 'pending',
    })

    const validateForm = () => {
      const requiredFields = ['firstName', 'lastName', 'currentAddress', 'phone', 'email']
      const missingFields = requiredFields.filter(field => !form.value[field])
      
      if (missingFields.length > 0) {
        alert('Please fill in all required fields: ' + missingFields.join(', '))
        return false
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(form.value.email)) {
        alert('Please enter a valid email address')
        return false
      }
      
      return true
    }

    const handleSubmit = async () => {
      if (!validateForm()) return
      
      isSubmitting.value = true
      
      try {
        // Here you would typically make an API call
        // await axios.post('/api/student-application', form.value)
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        alert(`Application submitted successfully!\n\nStudent: ${form.value.firstName} ${form.value.lastName}\nEmail: ${form.value.email}`)
        
        console.log('Form data:', form.value)
        
        // Reset form after successful submission
        // resetForm()
        
      } catch (error) {
        alert('Submission failed. Please try again.')
        console.error('Submission error:', error)
      } finally {
        isSubmitting.value = false
      }
    }

    const resetForm = () => {
      form.value = {
        firstName: '',
        lastName: '',
        gender: '',
        age: null,
        placeOfBirth: '',
        dateOfBirth: '',
        healthNote: '',
        specialRequests: '',
        father: {
          firstName: '',
          lastName: '',
          job: '',
          age: null,
        },
        mother: {
          firstName: '',
          lastName: '',
          job: '',
          age: null,
        },
        guardian: {
          firstName: '',
          lastName: '',
          job: '',
          age: null,
          gender: '',
          relationship: '',
          address: '',
        },
        currentAddress: '',
        phone: '',
        email: '',
        status: 'pending',
      }
    }

    return {
      form,
      isSubmitting,
      handleSubmit,
      resetForm
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: #f8fafc;
  color: #334155;
  line-height: 1.6;
  min-height: 100vh;
}

.form-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  padding: 40px;
  margin: 20px 0;
}

.header {
  text-align: center;
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 2px solid #e2e8f0;
}

.header h1 {
  font-size: 2.5rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 10px;
}

.header .subtitle {
  font-size: 1.1rem;
  color: #22c55e;
  font-weight: 500;
}

.section-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin: 30px 0 20px 0;
  padding-bottom: 8px;
  border-bottom: 1px solid #e2e8f0;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

label {
  font-weight: 500;
  margin-bottom: 8px;
  color: #374151;
  font-size: 0.95rem;
}

input, select, textarea {
  padding: 12px 16px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  background-color: white;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: #22c55e;
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
}

textarea {
  resize: vertical;
  min-height: 100px;
}

select {
  cursor: pointer;
}

.submit-btn {
  background-color: #22c55e;
  color: white;
  padding: 16px 32px;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  margin-top: 30px;
  transition: background-color 0.2s ease;
}

.submit-btn:hover:not(:disabled) {
  background-color: #16a34a;
}

.submit-btn:active:not(:disabled) {
  background-color: #15803d;
}

.submit-btn:disabled {
  background-color: #9ca3af;
  cursor: not-allowed;
}

.required {
  color: #ef4444;
}

@media (max-width: 768px) {
  .container {
    padding: 10px;
  }
  
  .form-card {
    padding: 20px;
  }
  
  .header h1 {
    font-size: 2rem;
  }
  
  .form-grid {
    grid-template-columns: 1fr;
  }
}
</style>