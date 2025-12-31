import { Layout } from "@/components/layout/Layout";

const TermsOfService = () => {
  return (
    <Layout>
      <section className="py-20 md:py-32">
        <div className="section-container max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Terms of Service</h1>
          <p className="text-white/60 text-lg mb-12">
            Last updated: December 31, 2024
          </p>

          <div className="prose prose-invert max-w-none space-y-8 text-white/80">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing and using the Coreveil Engineering website (https://coreveil.com) and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on the Coreveil website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose or for any public display</li>
                <li>Attempting to reverse engineer any software contained on the Coreveil website</li>
                <li>Removing any copyright or other proprietary notations from the materials</li>
                <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Disclaimer</h2>
              <p>
                The materials on the Coreveil website are provided on an "as is" basis. Coreveil makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Limitations</h2>
              <p>
                In no event shall Coreveil or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the Coreveil website, even if Coreveil or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Accuracy of Materials</h2>
              <p>
                The materials appearing on the Coreveil website could include technical, typographical, or photographic errors. Coreveil does not warrant that any of the materials on its website are accurate, complete, or current. Coreveil may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Links</h2>
              <p>
                Coreveil has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Coreveil of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Modifications</h2>
              <p>
                Coreveil may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of California, and you irrevocably submit to the exclusive jurisdiction of the courts located in California.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. User Responsibilities</h2>
              <p className="mb-4">As a user of our services, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Not engage in any unlawful or prohibited behavior</li>
                <li>Respect intellectual property rights</li>
                <li>Not attempt to gain unauthorized access to systems</li>
                <li>Not transmit viruses, malware, or harmful code</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Intellectual Property Rights</h2>
              <p>
                All content on the Coreveil website, including text, graphics, logos, images, and software, is the property of Coreveil or its content suppliers and is protected by international copyright laws. Unauthorized reproduction is prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Limitation of Liability</h2>
              <p>
                In no case shall Coreveil, its directors, officers, or agents be liable for any indirect, incidental, special, or consequential damages, or loss of profits, revenue, data, or use, even if advised of the possibility of such damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Severability</h2>
              <p>
                If any provision of these terms of service is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">13. Contact Information</h2>
              <p className="mb-4">
                For any questions regarding these Terms of Service, please contact us at:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 mt-4">
                <p className="text-white font-semibold mb-2">Coreveil Engineering</p>
                <p className="text-white/70">Email: hello@coreveil.com</p>
                <p className="text-white/70">Phone: +1 (555) 123-0456</p>
                <p className="text-white/70">Website: https://coreveil.com</p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsOfService;
