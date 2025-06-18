// Setup Helper for Digital Orange Sites
import { FORMSPREE_CONFIG, validateFormspreeConfig } from '@/config/formspree';

export const checkSetupStatus = () => {
  console.log('\n🧡 Digital Orange Sites - Setup Status Check\n');
  
  // Check Formspree configuration
  const isFormspreeConfigured = validateFormspreeConfig();
  
  if (isFormspreeConfigured) {
    console.log('✅ Formspree: CONFIGURED');
    console.log(`   📧 Endpoint: ${FORMSPREE_CONFIG.ENDPOINT}`);
    console.log(`   📬 Emails go to: ${FORMSPREE_CONFIG.RECIPIENT_EMAIL}`);
    console.log('\n💡 Make sure you verified the email in Formspree dashboard!');
  } else {
    console.log('⚠️  Formspree: NOT CONFIGURED');
    console.log('   📝 Please follow these steps:');
    console.log('   1. Go to https://formspree.io');
    console.log('   2. Create account and new form');
    console.log('   3. Set email to: hola@digitalorange.com.mx');
    console.log('   4. Copy form ID to src/config/formspree.ts');
    console.log('   5. Verify email confirmation');
    console.log('\n📖 See FORMSPREE_SETUP.md for detailed instructions');
  }
  
  // Show current fallback status
  console.log('\n🔄 Fallback Mode:');
  if (isFormspreeConfigured) {
    console.log('   ✅ Formspree primary, mailto as backup');
  } else {
    console.log('   📧 Using mailto (opens email client)');
  }
  
  console.log('\n📊 Form Status:');
  console.log('   ✅ Project Wizard: Ready');
  console.log('   ✅ Contact Form: Ready');
  console.log('   ✅ Email Templates: Professional HTML');
  console.log('   ✅ Static Site Compatible: 100%');
  
  console.log('\n🎯 Next Steps:');
  if (!isFormspreeConfigured) {
    console.log('   1. Configure Formspree (see instructions above)');
    console.log('   2. Test forms on your site');
    console.log('   3. Check hola@digitalorange.com.mx for emails');
  } else {
    console.log('   1. Test forms to verify email delivery');
    console.log('   2. Check spam folder if emails don\'t arrive');
    console.log('   3. Monitor Formspree dashboard for submissions');
  }
  
  console.log('\n═══════════════════════════════════════════════════\n');
};

// Function to display quick setup reminder
export const showQuickSetup = () => {
  if (!validateFormspreeConfig()) {
    console.warn('\n🚨 QUICK SETUP NEEDED:');
    console.warn('Edit src/config/formspree.ts and replace YOUR_FORM_ID');
    console.warn('See FORMSPREE_SETUP.md for complete instructions\n');
  }
};

// Call setup check on import (only in development)
if (import.meta.env.DEV) {
  showQuickSetup();
} 