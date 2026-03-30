// Your Google Apps Script URL
const SHEETS_API_URL = 'https://script.google.com/macros/s/AKfycbweoiO7_2l2RC4ZaHQa9x35k_Qt01Y0tWOoXvbE4s0eXUu0ZFbBCbAysPiK9FBjI1I/exec';

export const submitToGoogleSheets = async (formData) => {
  try {
    // Create a form element for traditional POST (bypasses CORS)
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = SHEETS_API_URL;
    form.target = 'hidden_iframe';
    form.style.display = 'none';
    
    // Add data as JSON string
    const input = document.createElement('input');
    input.name = 'data';
    input.value = JSON.stringify({
      name: formData.name,
      email: formData.email,
      phone: formData.phone || '',
      projectType: formData.projectType || '',
      budget: formData.budget || '',
      message: formData.message,
      timestamp: new Date().toISOString(),
      userLocation: formData.userLocation || 'Unknown',
      page: 'Contact Form'
    });
    form.appendChild(input);
    
    // Create hidden iframe to receive response
    let iframe = document.getElementById('hidden_iframe');
    if (!iframe) {
      iframe = document.createElement('iframe');
      iframe.id = 'hidden_iframe';
      iframe.name = 'hidden_iframe';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
    }
    
    document.body.appendChild(form);
    form.submit();
    
    // Clean up
    setTimeout(() => {
      document.body.removeChild(form);
    }, 1000);
    
    return { success: true, message: 'Form submitted successfully' };
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    // Fallback to localStorage
    saveToLocalStorage(formData);
    return { success: true, message: 'Saved locally. Will sync when online.' };
  }
};

// Fallback: Save to localStorage if offline
const saveToLocalStorage = (formData) => {
  const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
  submissions.push({
    ...formData,
    timestamp: new Date().toISOString(),
    synced: false
  });
  localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
};

// Sync offline submissions when online
export const syncOfflineSubmissions = async () => {
  const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
  const unsynced = submissions.filter(s => !s.synced);
  
  for (const submission of unsynced) {
    try {
      await submitToGoogleSheets(submission);
      submission.synced = true;
    } catch (error) {
      console.error('Sync failed:', error);
    }
  }
  
  localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
};

// Get user location from IP
export const getUserLocation = async () => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const locationData = await response.json();
    
    return {
      city: locationData.city || 'Nairobi',
      country: locationData.country_name || 'Kenya',
      region: locationData.region || '',
      lat: locationData.latitude || -1.2864,
      lng: locationData.longitude || 36.8172,
      ip: locationData.ip
    };
  } catch (error) {
    console.error('Error getting location:', error);
    return { city: 'Nairobi', country: 'Kenya', lat: -1.2864, lng: 36.8172 };
  }
};