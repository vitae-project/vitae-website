const generateCompany = (name, source) => {
    return {
        name,
        source,
    }
}

export const companies = [
    generateCompany("Intel",  "/companyImages/intel.png"),
    generateCompany("Barclays",  "/companyImages/barclays.png"),
    generateCompany("Google",  "/companyImages/google.png"),
    generateCompany("HSBC",  "/companyImages/hsbc.png"),
    generateCompany("JP Morgan",  "/companyImages/jpmorgan.png"),
    generateCompany("Meta",  "/companyImages/meta.png"),
    generateCompany("Jane Street",  "/companyImages/janestreet.png"),
    generateCompany("Microsoft",  "/companyImages/microsoft.png"),
    generateCompany("Monzo",  "/companyImages/monzo.png"),
    generateCompany("Shopify",  "/companyImages/shopify.png"),
    generateCompany("Spotify",  "/companyImages/spotify.png"),
    generateCompany("Uber",  "/companyImages/uber.png"),
    generateCompany("Natwest",  "/companyImages/natwest.png"),
]

