import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
import {
  HiCog,
  HiGlobeAlt,
  HiCreditCard,
  HiShare,
  HiMail,
  HiSearch,
  HiShieldCheck,
  HiSave,
  HiPhotograph,
  HiLockClosed,
} from "react-icons/hi";
import Button from "../components/ui/Button";
import FormInput from "../components/ui/FormInput";
import {
  updateGeneralSettings,
  updatePaymentSettings,
  updateSocialSettings,
  updateEmailSettings,
  updateSeoSettings,
  updateSecuritySettings,
} from "../redux/slices/settingsSlice";

const tabs = [
  { id: "general", label: "General", icon: HiCog },
  { id: "payment", label: "Payment", icon: HiCreditCard },
  { id: "social", label: "Social Links", icon: HiShare },
  { id: "email", label: "Email Settings", icon: HiMail },
  { id: "seo", label: "SEO", icon: HiSearch },
  { id: "security", label: "Security", icon: HiShieldCheck },
];

export default function Settings() {
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.settings);

  const [activeTab, setActiveTab] = useState("general");
  const [saving, setSaving] = useState(false);

  // Local state for each tab
  const [general, setGeneral] = useState(settings.general);
  const [payment, setPayment] = useState(settings.payment);
  const [social, setSocial] = useState(settings.social);
  const [email, setEmail] = useState(settings.email);
  const [seo, setSeo] = useState(settings.seo);
  const [security, setSecurity] = useState(settings.security);

  const handleSave = async (section) => {
    setSaving(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800));

    switch (section) {
      case "general":
        dispatch(updateGeneralSettings(general));
        break;
      case "payment":
        dispatch(updatePaymentSettings(payment));
        break;
      case "social":
        dispatch(updateSocialSettings(social));
        break;
      case "email":
        dispatch(updateEmailSettings(email));
        break;
      case "seo":
        dispatch(updateSeoSettings(seo));
        break;
      case "security":
        dispatch(updateSecuritySettings(security));
        break;
    }

    setSaving(false);
    toast.success(
      `${tabs.find((t) => t.id === section).label} settings saved successfully!`,
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case "general":
        return (
          <div className="space-y-6">
            <div className="glass-effect rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <HiGlobeAlt className="w-5 h-5 text-primary-purple" />
                Site Information
              </h3>

              <FormInput
                label="Site Name"
                name="siteName"
                value={general.siteName}
                onChange={(e) =>
                  setGeneral({ ...general, siteName: e.target.value })
                }
              />

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Logo
                </label>
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 rounded-xl gradient-bg flex items-center justify-center border-2 border-dashed border-white/20 cursor-pointer hover:border-primary-purple/50 transition-colors">
                    <HiPhotograph className="w-8 h-8 text-gray-400" />
                  </div>
                  <div>
                    <Button variant="secondary" size="sm">
                      Upload Logo
                    </Button>
                    <p className="text-xs text-gray-500 mt-2">
                      PNG or SVG, max 2MB
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold mb-4">
                Contact Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormInput
                  label="Contact Email"
                  name="contactEmail"
                  type="email"
                  value={general.contactEmail}
                  onChange={(e) =>
                    setGeneral({ ...general, contactEmail: e.target.value })
                  }
                />

                <FormInput
                  label="Contact Phone"
                  name="contactPhone"
                  value={general.contactPhone}
                  onChange={(e) =>
                    setGeneral({ ...general, contactPhone: e.target.value })
                  }
                />
              </div>

              <FormInput
                label="Address"
                name="address"
                value={general.address}
                onChange={(e) =>
                  setGeneral({ ...general, address: e.target.value })
                }
                className="mt-4"
              />
            </div>

            <div className="flex justify-end">
              <Button
                icon={HiSave}
                loading={saving}
                onClick={() => handleSave("general")}
              >
                Save Changes
              </Button>
            </div>
          </div>
        );

      case "payment":
        return (
          <div className="space-y-6">
            <div className="glass-effect rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <HiCreditCard className="w-5 h-5 text-primary-purple" />
                Payment Gateway Configuration
              </h3>

              <FormInput
                label="Payment Gateway"
                name="gateway"
                type="select"
                value={payment.gateway}
                onChange={(e) =>
                  setPayment({ ...payment, gateway: e.target.value })
                }
                options={[
                  { value: "stripe", label: "Stripe" },
                  { value: "paypal", label: "PayPal" },
                  { value: "razorpay", label: "Razorpay" },
                ]}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <FormInput
                  label="Public Key / Client ID"
                  name="publicKey"
                  value={payment.stripePublicKey}
                  onChange={(e) =>
                    setPayment({ ...payment, stripePublicKey: e.target.value })
                  }
                  placeholder="pk_test_..."
                />

                <FormInput
                  label="Secret Key"
                  name="secretKey"
                  type="password"
                  value={payment.stripeSecretKey}
                  onChange={(e) =>
                    setPayment({ ...payment, stripeSecretKey: e.target.value })
                  }
                  placeholder="sk_test_..."
                />
              </div>
            </div>

            <div className="glass-effect rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold mb-4">Currency & Tax</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormInput
                  label="Currency"
                  name="currency"
                  type="select"
                  value={payment.currency}
                  onChange={(e) =>
                    setPayment({ ...payment, currency: e.target.value })
                  }
                  options={[
                    { value: "USD", label: "USD ($)" },
                    { value: "EUR", label: "EUR (€)" },
                    { value: "GBP", label: "GBP (£)" },
                    { value: "INR", label: "INR (₹)" },
                  ]}
                />

                <FormInput
                  label="Tax Rate (%)"
                  name="taxRate"
                  type="number"
                  value={payment.taxRate}
                  onChange={(e) =>
                    setPayment({
                      ...payment,
                      taxRate: parseFloat(e.target.value),
                    })
                  }
                />
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                icon={HiSave}
                loading={saving}
                onClick={() => handleSave("payment")}
              >
                Save Payment Settings
              </Button>
            </div>
          </div>
        );

      case "social":
        return (
          <div className="space-y-6">
            <div className="glass-effect rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <HiShare className="w-5 h-5 text-primary-purple" />
                Social Media Links
              </h3>

              <div className="space-y-4">
                <FormInput
                  label="Facebook URL"
                  name="facebook"
                  value={social.facebook}
                  onChange={(e) =>
                    setSocial({ ...social, facebook: e.target.value })
                  }
                  placeholder="https://facebook.com/yourpage"
                />

                <FormInput
                  label="Instagram URL"
                  name="instagram"
                  value={social.instagram}
                  onChange={(e) =>
                    setSocial({ ...social, instagram: e.target.value })
                  }
                  placeholder="https://instagram.com/yourpage"
                />

                <FormInput
                  label="Twitter / X URL"
                  name="twitter"
                  value={social.twitter}
                  onChange={(e) =>
                    setSocial({ ...social, twitter: e.target.value })
                  }
                  placeholder="https://twitter.com/yourhandle"
                />

                <FormInput
                  label="YouTube Channel URL"
                  name="youtube"
                  value={social.youtube}
                  onChange={(e) =>
                    setSocial({ ...social, youtube: e.target.value })
                  }
                  placeholder="https://youtube.com/@yourchannel"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                icon={HiSave}
                loading={saving}
                onClick={() => handleSave("social")}
              >
                Save Social Links
              </Button>
            </div>
          </div>
        );

      case "email":
        return (
          <div className="space-y-6">
            <div className="glass-effect rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <HiMail className="w-5 h-5 text-primary-purple" />
                SMTP Configuration
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormInput
                  label="SMTP Host"
                  name="smtpHost"
                  value={email.smtpHost}
                  onChange={(e) =>
                    setEmail({ ...email, smtpHost: e.target.value })
                  }
                  placeholder="smtp.gmail.com"
                />

                <FormInput
                  label="SMTP Port"
                  name="smtpPort"
                  type="number"
                  value={email.smtpPort}
                  onChange={(e) =>
                    setEmail({ ...email, smtpPort: parseInt(e.target.value) })
                  }
                  placeholder="587"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <FormInput
                  label="SMTP Username"
                  name="smtpUser"
                  type="email"
                  value={email.smtpUser}
                  onChange={(e) =>
                    setEmail({ ...email, smtpUser: e.target.value })
                  }
                  placeholder="notifications@yourdomain.com"
                />

                <FormInput
                  label="SMTP Password"
                  name="smtpPassword"
                  type="password"
                  value={email.smtpPassword}
                  onChange={(e) =>
                    setEmail({ ...email, smtpPassword: e.target.value })
                  }
                  placeholder="••••••••"
                />
              </div>

              <FormInput
                label="Sender Name"
                name="senderName"
                value={email.senderName}
                onChange={(e) =>
                  setEmail({ ...email, senderName: e.target.value })
                }
                className="mt-4"
              />
            </div>

            <div className="flex justify-end">
              <Button
                icon={HiSave}
                loading={saving}
                onClick={() => handleSave("email")}
              >
                Save Email Settings
              </Button>
            </div>
          </div>
        );

      case "seo":
        return (
          <div className="space-y-6">
            <div className="glass-effect rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <HiSearch className="w-5 h-5 text-primary-purple" />
                SEO Settings
              </h3>

              <FormInput
                label="Meta Title"
                name="metaTitle"
                value={seo.metaTitle}
                onChange={(e) => setSeo({ ...seo, metaTitle: e.target.value })}
                placeholder="Your site title for search engines"
              />

              <FormInput
                label="Meta Description"
                name="metaDescription"
                type="textarea"
                value={seo.metaDescription}
                onChange={(e) =>
                  setSeo({ ...seo, metaDescription: e.target.value })
                }
                placeholder="Brief description of your website"
                className="mt-4"
              />

              <FormInput
                label="Keywords"
                name="keywords"
                value={seo.keywords}
                onChange={(e) => setSeo({ ...seo, keywords: e.target.value })}
                placeholder="dance, music, karate, classes"
                className="mt-4"
              />
            </div>

            <div className="flex justify-end">
              <Button
                icon={HiSave}
                loading={saving}
                onClick={() => handleSave("seo")}
              >
                Save SEO Settings
              </Button>
            </div>
          </div>
        );

      case "security":
        return (
          <div className="space-y-6">
            <div className="glass-effect rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <HiShieldCheck className="w-5 h-5 text-primary-purple" />
                Security Settings
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                  <div>
                    <p className="font-medium">Require Email Verification</p>
                    <p className="text-sm text-gray-400">
                      Users must verify email before accessing
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={security.requireEmailVerification}
                      onChange={(e) =>
                        setSecurity({
                          ...security,
                          requireEmailVerification: e.target.checked,
                        })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-primary-purple peer-checked:to-neon-pink"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                  <div>
                    <p className="font-medium">Two-Factor Authentication</p>
                    <p className="text-sm text-gray-400">
                      Enable 2FA for admin accounts
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={security.twoFactorAuth}
                      onChange={(e) =>
                        setSecurity({
                          ...security,
                          twoFactorAuth: e.target.checked,
                        })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-primary-purple peer-checked:to-neon-pink"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold mb-4">Session & Password</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormInput
                  label="Session Timeout (minutes)"
                  name="sessionTimeout"
                  type="number"
                  value={security.sessionTimeout}
                  onChange={(e) =>
                    setSecurity({
                      ...security,
                      sessionTimeout: parseInt(e.target.value),
                    })
                  }
                />

                <FormInput
                  label="Minimum Password Length"
                  name="passwordMinLength"
                  type="number"
                  value={security.passwordMinLength}
                  onChange={(e) =>
                    setSecurity({
                      ...security,
                      passwordMinLength: parseInt(e.target.value),
                    })
                  }
                />
              </div>
            </div>

            <div className="glass-effect rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <HiLockClosed className="w-5 h-5 text-red-400" />
                Change Admin Password
              </h3>

              <div className="space-y-4 max-w-md">
                <FormInput
                  label="Current Password"
                  name="currentPassword"
                  type="password"
                  placeholder="Enter current password"
                />

                <FormInput
                  label="New Password"
                  name="newPassword"
                  type="password"
                  placeholder="Enter new password"
                />

                <FormInput
                  label="Confirm New Password"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm new password"
                />

                <Button variant="primary" className="mt-2">
                  Update Password
                </Button>
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                icon={HiSave}
                loading={saving}
                onClick={() => handleSave("security")}
              >
                Save Security Settings
              </Button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6 animate-slide-up">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold gradient-text">Settings</h1>
        <p className="text-gray-400 mt-1">
          Manage platform configuration and preferences
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar Tabs */}
        <div className="lg:w-64 flex-shrink-0">
          <nav className="glass-effect rounded-2xl p-4 border border-white/10 lg:sticky lg:top-6">
            <ul className="space-y-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <li key={tab.id}>
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-left ${
                        activeTab === tab.id
                          ? "gradient-bg text-white shadow-lg shadow-purple-500/25"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium text-sm">{tab.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Content Area */}
        <div className="flex-1">{renderContent()}</div>
      </div>
    </div>
  );
}
