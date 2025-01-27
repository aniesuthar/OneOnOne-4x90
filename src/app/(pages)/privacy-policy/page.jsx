import BoxLayout from '@/components/common/Box'
import defaults from '@/lib/defaults'
import React from 'react'

export default function page() {
    return (
        <BoxLayout className=" min-h-[40vh] pt-24 text-center space-y-4">
            <div className='space-y-4 py-12'>
                <h2 className='text-primary'>Privacy Policy</h2>
                <p className='text-base'>
                    <br />
                    <b>Privacy & Security</b>
                    <br />
                    We respect each site visitor’s right to personal privacy. To that end, we collect and use information throughout our website only as disclosed in this Privacy Policy. This statement applies solely to information collected on this website.

                    A user can browse our website without telling us who you are or revealing any personal information about yourself. Visitors and/or members are not required to complete our registration form in order to use our website. For each visitor to our website, our web server automatically omits the recognition of information regarding the domain or e-mail address to ensure your privacy.

                    If a user decides to complete the registration form, they must provide certain contact information. We will never sell, share or give away this information and it is only gathered to contact and communicate with the user regarding services on our website for which they have expressed interest. It is optional for the user to provide demographic information (income level, gender, etc.), and unique identifiers (username, password, etc.). Giving additional information helps provide a more personalized experience on our site, but is not required. This site collects cookies to provide an effective, efficient and relevant experience on our website.
                    <br />
                    <br />
                    <b>NOTIFICATION OF CHANGES</b>
                    <br />
                    If we decide to change our privacy policy, we will post those changes to this privacy statement. As our business evolves and expands, we will continue to implement new technologies to improve the services and features we provide. This privacy policy will be updated to reflect these changes. The use of information that we gather now is subject to the privacy policy in effect at the time of use. It is your responsibility to review our privacy policy for changes.

                    <br />
                    <br />
                    <b>CONFLICT RESOLUTION</b>
                    <br />
                    We are committed to resolving disputes within 24-48 hours. 
                    <br />
                    If you have any questions, please contact us at: {defaults.CONTACT_NO}
                </p>
            </div>

        </BoxLayout>
    )
}