<template>
  <div class="student-register-form">
    <h2 class="form-title">Student Application</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" v-model="firstName" required>
      </div>
      <div class="form-group">
        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" v-model="lastName" required>
      </div>

      <div class="form-group">
        <label for="gender">Gender:</label>
        <select id="gender" v-model="gender" required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div class="form-group">
        <label for="age">Age:</label>
        <input type="number" id="age" v-model="age" required>
      </div>

      <div class="form-group">
        <label for="placeOfBirth">Place of Birth:</label>
        <input type="text" id="placeOfBirth" v-model="placeOfBirth" required>
      </div>

      <div class="form-group">
        <label for="fatherName">Father's Name:</label>
        <input type="text" id="fatherName" v-model="fatherName" required>
      </div>

      <div class="form-group">
        <label for="fatherAge">Father's Age:</label>
        <input type="number" id="fatherAge" v-model="fatherAge" required>
      </div>

      <div class="form-group">
        <label for="fatherJob">Father's Job:</label>
        <input type="text" id="fatherJob" v-model="fatherJob" required>
      </div>

      <div class="form-group">
        <label for="motherName">Mother's Name:</label>
        <input type="text" id="motherName" v-model="motherName" required>
      </div>

      <div class="form-group">
        <label for="motherAge">Mother's Age:</label>
        <input type="number" id="motherAge" v-model="motherAge" required>
      </div>

      <div class="form-group">
        <label for="motherJob">Mother's Job:</label>
        <input type="text" id="motherJob" v-model="motherJob" required>
      </div>

      <div class="form-group">
        <label for="guardianName">Guardian's Name:</label>
        <input type="text" id="guardianName" v-model="guardianName">
      </div>

      <div class="form-group">
        <label for="guardianAge">Guardian's Age:</label>
        <input type="number" id="guardianAge" v-model="guardianAge">
      </div>

      <div class="form-group">
        <label for="guardianJob">Guardian's Job:</label>
        <input type="text" id="guardianJob" v-model="guardianJob">
      </div>

      <div class="form-group">
        <label for="phoneNumber">Phone Number:</label>
        <input type="tel" id="phoneNumber" v-model="phoneNumber" required>
      </div>

      <div class="form-group">
        <label for="address">Address:</label>
        <textarea id="address" v-model="address" rows="3" required></textarea>
      </div>

      <div class="form-group">
        <label>Additional Services:</label>
        <div>
          <input type="checkbox" id="busService" v-model="needsBus">
          <label for="busService">Bus Service</label>
        </div>
        <div>
          <input type="checkbox" id="mealPlan" v-model="needsMealPlan">
          <label for="mealPlan">Meal Plan</label>
        </div>
      </div>

      <div class="form-group">
        <label for="specialRequests">Special Requests:</label>
        <textarea id="specialRequests" v-model="specialRequests" rows="3"></textarea>
      </div>

      <div class="form-group">
        <label for="healthNotes">Health Notes:</label>
        <textarea id="healthNotes" v-model="healthNotes" rows="3"></textarea>
      </div>

      <div class="form-group">
        <label for="documentUpload">Document Upload:</label>
        <input type="file" id="documentUpload" @change="handleFileUpload">
      </div>

      <button type="submit">submit</button>
    </form>
    <p v-if="error" class="error-message">{{ error }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      gender: '',
      age: null,
      placeOfBirth: '',
      fatherName: '',
      fatherAge: null,
      fatherJob: '',
      motherName: '',
      motherAge: null,
      motherJob: '',
      guardianName: '',
      guardianAge: null,
      guardianJob: '',
      phoneNumber: '',
      address: '',
      needsBus: false,
      needsMealPlan: false,
      specialRequests: '',
      healthNotes: '',
      document: null,
      error: null
    };
  },
  methods: {
    handleSubmit() {
      // Basic validation - add more as needed
      if (!this.firstName || !this.lastName || !this.gender || !this.age || !this.placeOfBirth || !this.fatherName || !this.fatherAge || !this.fatherJob || !this.motherName || !this.motherAge || !this.motherJob || !this.phoneNumber || !this.address) {
        this.error = 'Please fill in all required fields.';
        return;
      }

      let requests = this.specialRequests ? this.specialRequests + '\n' : '';
      if (this.needsBus) {
        requests += 'Needs Bus Service\n';
      }
      if (this.needsMealPlan) {
        requests += 'Needs Meal Plan\n';
      }
      this.specialRequests = requests;

      // Add your application submission logic here (e.g., API call)
      console.log('Submitting application for:', this.firstName, this.lastName);
      console.log('Data:', this.$data); // Log all data for debugging
      this.error = null; // Clear any previous errors
    },
    handleFileUpload(event) {
      this.document = event.target.files[0];
      console.log('Uploaded document:', this.document);
    }
  }
};
</script>

<style scoped>
.student-register-form {
  width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.form-title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
input[type="date"],
input[type="password"],
input[type="number"],
input[type="tel"],
select,
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #3e8e41;
}

.error-message {
  color: red;
}
</style>