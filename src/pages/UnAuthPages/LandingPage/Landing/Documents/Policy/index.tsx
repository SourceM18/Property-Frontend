import React from 'react'

import classNames from 'classnames'

import styles from '@pages/UnAuthPages/LandingPage/Landing/Documents/styles.module.scss'
import stylesLanding from '@pages/UnAuthPages/LandingPage/Landing/styles.module.scss'
import { socialLinks } from '@utils/constants'

const Policy = (): JSX.Element => {
	return (
		<div className={classNames(stylesLanding.landingContainer, styles.documentContainer)}>
			{/* 1. About this Policy */}
			<div className={styles.documentSection}>
				<h4>
					<span className={styles.documentNumber}>1.</span>About this Policy
				</h4>
				<p>
					<span className={styles.documentNumber}>1.1.</span>This Privacy Policy and Cookies (
					<span className={styles.documentBold}>“Privacy Policy”</span>) explains what information Rentwallet.net
					Limited (<span className={styles.documentBold}>“we”, “our”, “us”, “RentWallet”</span>) will collect about you
					(<span className={styles.documentBold}>“Personal Data”</span>), the purpose and legal basis for that
					processing and the circumstances where it could be provided to third parties. We are acting as a controller
					under the Data Protection Act 2018 (<span className={styles.documentBold}>“DPA”</span>) in relation to the
					Service, except to the extent we are acting as an agent of Moneyhub Financial Technology Limited (
					<span className={styles.documentBold}>“Moneyhub”</span>) for the provision of the Payment Services, in which
					case Moneyhub's privacy policy and cookies applies which can be found at{' '}
					<a href="https://www.moneyhub.com/privacy-policy-and-cookies" target={'_blank'} rel="noreferrer">
						https://www.moneyhub.com/privacy-policy-and-cookies
					</a>
					.
				</p>
				<p>
					<span className={styles.documentNumber}>1.2.</span>Capitalised terms used in this Privacy Policy that are not
					otherwise defined where they first appear shall have the meaning given to them in the RentWallet Service Terms
					of which this Privacy Policy forms part (<span className={styles.documentBold}>“Service Terms”</span>), or the
					DPA. The corporate information about us and TrueLayer Moneyhub are in Clause 2 of the Service Terms.
				</p>
				<p>
					<span className={styles.documentNumber}>1.3.</span>The Service Terms and this Privacy Policy determine our
					responsibilities under the DPA to protect your personal data provided to us via the Service. Please read this
					Privacy Policy and MoneyhubTrueLayer’s privacy policy and cookies carefully as they contain important
					information about the use of your personal data.
				</p>
				<p>
					<span className={styles.documentNumber}>1.4.</span>If you have any queries about this Privacy Policy or how we
					use your Personal Data, please contact us at <a href={`mailto: ${socialLinks.Email}`}>{socialLinks.Email}</a>.
				</p>
				<p>
					<span className={styles.documentNumber}>1.5.</span>You may also complain to the Information Commissioner’s
					Office if you consider there has been a breach of the DPA in connection with your Personal Data.
				</p>
				<p>
					<span className={styles.documentNumber}>1.6.</span>We aim to keep your personal data up-to-date, so please
					advise us of any changes by e-mailing <a href={`mailto: ${socialLinks.Email}`}>{socialLinks.Email}</a> or by
					updating the Service promptly if there is any change in your name, residential address, telephone number,
					e-mail address or any other details that are important for our dealings with you in relation to the Service.
				</p>
			</div>

			{/* 2. Collection, purpose and legal basis for Processing */}
			<div className={styles.documentSection}>
				<h4>
					<span className={styles.documentNumber}>2.</span>Collection, purpose and legal basis for Processing
				</h4>
				<p>
					We may collect and process the Personal Data for the purposes, and on the legal basis, specified in specified
					in Annex A to this Privacy Policy. Moneyhub’s privacy policy and cookies explains this in relation to the
					Payment Services.
				</p>
			</div>

			{/* 3. Sharing of information with third parties */}
			<div className={styles.documentSection}>
				<h4>
					<span className={styles.documentNumber}>3.</span>Sharing of information with third parties
				</h4>
				<p>
					We may need to share information about you with certain service providers, who help us to deliver the Service
					to you, such as third party technology companies who may provide elements of the Service functionality, and
					our group of companies (<span className={styles.documentBold}>“Third Party Service Providers”</span>). We only
					disclose Personal Data to Third Party Service Providers for the purposes explained in Annex A to this Policy.
				</p>
			</div>

			{/* 4. Storing your Ppersonal Ddata */}
			<div className={styles.documentSection}>
				<h4>
					<span className={styles.documentNumber}>4.</span>Storing your Personal Data
				</h4>
				<p>
					<span className={styles.documentNumber}>4.1.</span>The Personal Data described in Annex A of this Privacy
					Policy is stored in the United Kingdom (<span className={styles.documentBold}>“UK”</span>). We will take all
					steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy
					Policy.
				</p>
				<p>
					<span className={styles.documentNumber}>4.2.</span>Once we have received your information, we will use
					appropriate technical and organisational measures and procedures to protect your personal data from
					unauthorised or unlawful processing and against accidental loss, destruction or damage. We use encryption
					technology to reduce the risk of your data being accessed by unauthorised persons via the Service, but as the
					Internet and mobile networks are not completely secure we cannot guarantee the security of your Personal Data
					while it is being transmitted to or from us, so any transmission is at your own risk.
				</p>
				<p>
					<span className={styles.documentNumber}>4.3.</span>Your Personal Data will be stored for the duration of the
					Service Terms and for such time thereafter as required by Applicable Law or the limitation period for bringing
					contractual claims under or in relation to the Service Terms.
				</p>
			</div>

			{/* 5. Processing of personal data not provided to us by you */}
			<div className={styles.documentSection}>
				<h4>
					<span className={styles.documentNumber}>5.</span>Processing of personal data not provided to us by you
				</h4>
				<p>
					<span className={styles.documentNumber}>5.1.</span>As required by Applicable Law, we will also check your
					identity and other personal details with a fraud prevention agency/agencies and credit reference agencies. If
					you give false or inaccurate information and we identify fraud, this will be recorded and may be shared by
					those agencies with other organisations, so that we and those other organisations, including law enforcement
					agencies and debt collection agencies, may access, use and search these records to:
					<ul>
						<li>
							<span className={styles.documentAbc}>(a)</span>help make decisions about credit and credit related
							services, for you and members of your household;
						</li>
						<li>
							<span className={styles.documentAbc}>(b)</span>help make decisions on motor, household, credit, life and
							other insurance proposals and insurance claims, for you and members of your household;
						</li>
						<li>
							<span className={styles.documentAbc}>(c)</span>trace debtors, recover debt, prevent fraud, and to manage
							your accounts or insurance policies;
						</li>
						<li>
							<span className={styles.documentAbc}>(d)</span>prevent fraud and money laundering, for example, when:
							<ul>
								<li>· Checking details on applications for credit and credit related or other facilities;</li>
								<li>· Managing credit and credit related accounts or facilities;</li>
								<li>· Checking details on proposals and claims for all types of insurance; and</li>
								<li>· Checking details of job applicants and employees.</li>
							</ul>
						</li>
					</ul>
				</p>
				<p>
					<span className={styles.documentNumber}>5.2.</span>More information about credit reference agencies, their
					role as fraud prevention agencies, the data they hold, for how long, your rights and how they use personal
					data is available at the following links to each agency’s Credit Reference Agency Information Notice:
					<ul>
						<li>
							Call Credit at{' '}
							<a href="https://www.callcredit.co.uk/crain" target={'_blank'}>
								www.callcredit.co.uk/crain
							</a>
						</li>
						<li>
							Equifax at{' '}
							<a href="https://www.equifax.co.uk/crain" target={'_blank'}>
								www.equifax.co.uk/crain
							</a>
						</li>
						<li>
							Experian at{' '}
							<a href="https://www.experian.co.uk/crain" target={'_blank'}>
								www.experian.co.uk/crain
							</a>
						</li>
					</ul>
				</p>
			</div>

			{/* 6. Cookies and how we use them */}
			<div className={styles.documentSection}>
				<h4>
					<span className={styles.documentNumber}>6.</span>Cookies and how we use them
				</h4>
				<p>
					<span className={styles.documentNumber}>6.1.</span>A cookie is a small text file of letters and numbers that
					we store on your browser or digital device. Cookies send information back to the originating website on each
					subsequent visit, or to another website which recognises that cookie.
				</p>
				<p>
					<span className={styles.documentNumber}>6.2.</span>Generally, there are four types of cookies:
					<ul>
						<li>
							<span className={styles.documentDecimal}>·</span>{' '}
							<span className={styles.documentUnderline}>Necessary cookies</span>, required for the operation of the
							Service. They enable you to log into secure accounts and use interactive features, for example.
						</li>
						<li>
							<span className={styles.documentDecimal}>·</span>{' '}
							<span className={styles.documentUnderline}>Analytical/performance cookies</span>, which allow us to
							recognise and count the number of visitors and users and how they use the Service. This helps us improve
							how the Service works, by ensuring users find what they are looking for more easily, for example.
						</li>
						<li>
							<span className={styles.documentDecimal}>·</span>{' '}
							<span className={styles.documentUnderline}>Functionality cookies</span>, which recognise when you return
							to the Service, so we can greet you by name and associate you with your stored preferences.
						</li>
						<li>
							<span className={styles.documentDecimal}>·</span>{' '}
							<span className={styles.documentUnderline}>Targeting cookies</span>, which record your visit to our
							Service and potentially other sites, the pages you have visited and the links you have followed so that we
							or third parties could make the Service and the information displayed on it more relevant to your
							interests and/or serve advertisements.
						</li>
					</ul>
				</p>
				<p>
					<span className={styles.documentNumber}>6.3.</span>The information in Annex A covers any use of cookies by us
					that involves us collecting and processing personal data about you.
				</p>
				<p>
					<span className={styles.documentNumber}>6.4.</span>Please note that third parties (including, for example,
					providers of external services like web traffic analysis services) may also use cookies, over which we have no
					control. You should refer to their Privacy Policies or Cookie Policies for the relevant information about
					those cookies.
				</p>
				<p>
					<span className={styles.documentNumber}>6.5.</span>You can block cookies by activating the setting on your
					browser that allows you to refuse the setting of all or some cookies. All browsers provide tools that allow
					you to control how you handle cookies: accept, reject or delete them. These settings are normally accessed via
					the ‘settings’, 'preferences' or 'options' menu of the browser you are using, but you could also look for a
					‘help’ function or contact the browser provider. However, if you use your browser settings to block all
					cookies (including essential cookies) you may not be able to access all or parts of the Service.
				</p>
			</div>

			{/* 7. Your rights */}
			<div className={styles.documentSection}>
				<h4>
					<span className={styles.documentNumber}>7.</span>Your rights
				</h4>
				<p>
					The table in Annex B to this Privacy Policy explains your rights under the DPA and how to exercise them. This
					Privacy Policy provides confirmation of the details required in relation to your right of access.
				</p>
			</div>

			{/* 8. Changes to Privacy Policy */}
			<div className={styles.documentSection}>
				<h4>
					<span className={styles.documentNumber}>8.</span>Changes to Privacy Policy
				</h4>
				<p>
					We reserve the right to add to or change the terms of this Privacy Policy on the same conditions as we may
					vary the RentWallet Service Terms (see Clause 17). If we change this Privacy Policy, we will post the new
					Privacy Policy on the Service.
				</p>
			</div>

			{/* 9.  Links to third parties */}
			<div className={styles.documentSection}>
				<h4>
					<span className={styles.documentNumber}>9.</span>Links to third parties
				</h4>
				<p>
					The Service may contain links to other websites and services. Please be aware that we shall not be held
					responsible for the privacy policies of such other sites and services.
				</p>
			</div>

			{/* 10.   How to complain */}
			<div className={styles.documentSection}>
				<h4>
					<span className={styles.documentNumber}>10.</span>How to complain
				</h4>
				<p>
					If you have any concerns about our use of your personal information, you can make a complaint to us at{' '}
					<a href={`mailto: ${socialLinks.Email}`}>{socialLinks.Email}</a>.
				</p>
				<p>You can also complain to the ICO if you are unhappy with how we have used your data.</p>
				<p>
					The ICO’s address: Information Commissioner’s Office, Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF,
					United Kingdom
				</p>
				<p>Helpline number: 0303 123 1113</p>
				<p>
					ICO website:{' '}
					<a href="https://www.ico.org.uk" target={'_blank'} rel="noreferrer">
						https://www.ico.org.uk
					</a>
				</p>
			</div>

			{/* Table Annex A */}
			<div className={styles.documentTable}>
				<h4>Annex A</h4>
				<table>
					<tr>
						<th>Personal Data Collected</th>
						<th>Purpose</th>
						<th>Basis for processing</th>
					</tr>
					<tr>
						<td className={styles.documentTableList}>
							<p className={styles.a}>
								Information that you provide by filling in forms on the Service. This includes information provided at
								the time of registering to use the Service, posting material or requesting further services. We may also
								ask you for information when you report a problem with the Service;
							</p>
							<p className={styles.b}>
								Your personal and contact details, including your name and surname, date of birth, e-mail address, home
								address and telephone numbers;
							</p>
							<p className={styles.c}>Records of any correspondence between you and RentWallet; </p>
							<p className={styles.d}>Details of actions you carry out through the Service; </p>
							<p className={styles.e}>Details of your visits to the Service and the resources that you access; </p>
							<p className={styles.f}>payment account and payment transaction data;</p>
							<p className={styles.g}>
								details of the properties each Landlord has registered with the Service, including property image,
								property name, property address, tenancy term, rent amount, tenancy agreement and other documents
								uploaded by the Landlord onto the Service;
							</p>
							<p className={styles.h}>
								details of the tenants Landlord has registered with the Service, including tenant's photo, tenant’s name
								and surname, tenant’s email address and tenant’s mobile phone number.
							</p>
						</td>
						<td>
							<ul>
								<li>
									<p>To manage and administer the Service;</p>
								</li>
								<li>
									<p>To enable you to use the Service;</p>
								</li>
								<li>
									<p>To enable tenants to pay landlords using the Service;</p>
								</li>
								<li>
									<p>To enable landlords to request their tenants to use the Service to make rental payments;</p>
								</li>
								<li>
									<p>To enable landlords to see that rent has been paid by tenants;</p>
								</li>
								<li>
									<p>To deal with enquiries, complaints and feedback from you;</p>
								</li>
								<li>
									<p>To give you any notices under the Service Terms;</p>
								</li>
								<li>
									<p>
										To keep you informed about payments you initiate or information that you allow access to via the
										Service;
									</p>
								</li>
								<li>
									<p>
										To categorise payment transactions according to the type or purpose of goods or services purchased;
									</p>
								</li>
								<li>
									<p>To update RentWallet’s records;</p>
								</li>
								<li>
									<p>To identify, prevent, detect or tackle fraud, money laundering and other crime;</p>
								</li>
								<li>
									<p>To carry out checks required by applicable regulation or regulatory guidance;</p>
								</li>
								<li>
									<p>
										To carry out our obligations arising from and exercise our rights under, any agreements between you
										and us, including tracing and recovering payments and debts;
									</p>
								</li>
								<li>
									<p>
										To check any instructions given to us, for training purposes, for crime prevention and to improve
										the quality of our customer service.
									</p>
								</li>
							</ul>

							<br />
							<p>To disclose to third parties:</p>
							<ul>
								<li>
									<p>
										If it is under a duty to disclose or share your personal data in order to comply with any legal
										obligation;
									</p>
								</li>
								<li>
									<p>To enforce this Privacy Policy or RentWallet Service Terms;</p>
								</li>
								<li>
									<p>
										To a credit reference agency to check your identity and to prevent fraud, (it will also keep a
										record of your request and use it whenever anyone applies to be authenticated in your name);
									</p>
								</li>
								<li>
									<p>
										To Third Party Service Providers, agents and subcontractors, acting for us, to use for the purpose
										of operating the Service;
									</p>
								</li>
								<li>
									<p>To anti-fraud agencies, for the purpose of preventing and detecting fraud;</p>
								</li>
								<li>
									<p>To debt collectors and other third parties to trace you and recover any debt;</p>
								</li>
								<li>
									<p>
										In the event that RentWallet sells any business or assets, in which case it may disclose your
										personal data to the prospective seller or buyer of such business or assets;
									</p>
								</li>
								<li>
									<p>
										To protect the rights, property, or safety of it, its customers, or others (which includes
										exchanging information with other companies and organisations for the purposes of fraud protection);
									</p>
								</li>
								<li>
									<p>To investigate, prevent or detect fraud or carry out checks against money laundering;</p>
								</li>
								<li>
									<p>
										For audit purposes and to meet obligations to any relevant regulatory authority or taxing authority.
									</p>
								</li>
							</ul>
						</td>
						<td>
							<p>The processing is necessary for:</p>
							<ul>
								<li>
									<p>
										The performance of a contract to which you are party or in order to take steps at your request prior
										to entering into a contract;
									</p>
								</li>
								<li>
									<p>Compliance with a legal obligation to which we are subject;</p>
								</li>
								<li>
									<p>
										The purposes of the legitimate interests pursued by us or a third party, except where such interests
										are overridden by your interests or fundamental rights and freedoms which require protection of
										personal data.
									</p>
								</li>
							</ul>
						</td>
					</tr>
					<tr>
						<td>
							Information about the device(s) you use to access the Service and your visits to and use of the Service
							(including your Internet Protocol address, location, browser/platform type and version, internet service
							provider, operating system, referral source, exit pages, length of visit, page views, website navigation
							and search terms used)
						</td>
						<td>
							<ul>
								<li>
									<p>To improve your browsing experience by personalising the Service;</p>
								</li>
								<li>
									<p>To develop and improve the Service;</p>
								</li>
								<li>
									<p>
										To ensure that content on the Service is presented in the most effective manner for you and for your
										computer;
									</p>
								</li>
							</ul>
							<br />
							<p>To disclose to third parties:</p>
							<ul>
								<li>
									<p>
										To comply with a current judicial proceeding, a court order or legal process served on us, any
										request by the FCA or any other regulator who may have jurisdiction over us from time to time or for
										audit purposes and to meet obligations to any relevant regulatory authority or taxing authority;
									</p>
								</li>
								<li>
									<p>To enforce this Privacy Policy or RentWallet Service Terms;</p>
								</li>
							</ul>
						</td>
					</tr>
					<tr>
						<td>
							Copies of passports or other identification evidence that you provide for anti-money laundering and
							anti-fraud purposes;
						</td>
						<td>
							<ul>
								<li>
									<p>To identify, prevent, detect or tackle fraud, money laundering and other crime;</p>
								</li>
								<li>
									<p>To carry out checks required by applicable regulation or regulatory guidance;</p>
								</li>
							</ul>
							<br />
							<p>To disclose to third parties for:</p>
							<ul>
								<li>
									<p>
										To comply with a current judicial proceeding, a court order or legal process served on us, any
										request by the FCA or any other regulator who may have jurisdiction over us from time to time or for
										audit purposes and to meet obligations to any relevant regulatory authority or taxing authority;
									</p>
								</li>
								<li>
									<p>To enforce this Privacy Policy or RentWallet Service Terms;</p>
								</li>
								<li>
									<p>
										To a credit reference agency to check your identity and to prevent fraud, (it will also keep a
										record of your request and use it whenever anyone applies to be authenticated in your name);
									</p>
								</li>
								<li>
									<p>To anti-fraud agencies, for the purpose of preventing and detecting fraud.</p>
								</li>
							</ul>
						</td>
					</tr>
					<tr>
						<td>
							<p>Records of any surveys that you may be asked to complete;</p> <p>Your e-mail address.</p>
						</td>
						<td>
							<ul>
								<li>
									<p>
										To provide you with information, products or services that you request or which RentWallet decides
										may interest you;
									</p>
								</li>
								<li>
									<p>For statistical analysis;</p>
								</li>
								<li>
									<p>To identify which elements of the Service or other products might interest you.</p>
								</li>
							</ul>
						</td>
						<td>With your consent</td>
					</tr>
				</table>
			</div>

			{/* Table Annex B */}
			<div className={styles.documentTable}>
				<h4>Annex B</h4>
				<table>
					<tr>
						<th>Your Rights and How to Exercise Them</th>
						<th>Exception</th>
					</tr>
					<tr>
						<td>
							<p>
								<span className={classNames(styles.documentUnderline, styles.documentBold)}>Right of Access:</span> To
								obtain from us confirmation as to whether or not personal data concerning you are being processed, and,
								where that is the case, access to the personal data and the following information: (a) the purposes of
								the processing; (b) the categories of personal data concerned; (c) the recipients or categories of
								recipient to whom the personal data have been or will be disclosed, in particular recipients in third
								countries or international organisations; (d) where possible, the envisaged period for which the
								personal data will be stored, or, if not possible, the criteria used to determine that period; (e) the
								existence of the right to request from the controller rectification or erasure of personal data or
								restriction of processing of personal data concerning you or to object to such processing; (f) the right
								to lodge a complaint with a supervisory authority; (g) where the personal data are not collected from
								you, any available information as to their source; (h) the existence of automated decision-making,
								including profiling, referred to in Article 22(1) of the GDPR and (4) and, at least in those cases,
								meaningful information about the logic involved, as well as the significance and the envisaged
								consequences of such processing for you.
							</p>
							<p>
								<span className={styles.documentUnderline}>How to exercise:</span>
							</p>
							<p>
								This Privacy Policy provides confirmation of the details required in relation to your right of access.
							</p>
							<p>
								Under the DPA, you have a right to access certain personal records that RentWallet holds about you. Any
								access request may be subject to a fee to meet RentWallet’s costs in providing you with details of the
								information they hold about you if the request is unfounded or excessive. You can exercise the right at
								any time by contacting RentWallet at <a href={`mailto: ${socialLinks.Email}`}>{socialLinks.Email}</a>
							</p>
						</td>
						<td></td>
					</tr>
					<tr>
						<td>
							<p>
								<span className={classNames(styles.documentUnderline, styles.documentBold)}>
									Right to rectification:
								</span>{' '}
								to obtain from us without undue delay the rectification of inaccurate personal data concerning you.
							</p>
							<p>
								We must communication to each recipient to whom the rectified personal data have been disclosed, unless
								this proves impossible or involves disproportionate effort.
							</p>
							<p>We shall inform you about those recipients if you request it.</p>
							<p>
								You can exercise the right at any time by contacting RentWallet at{' '}
								<a href={`mailto: ${socialLinks.Email}`}>{socialLinks.Email}</a>
							</p>
						</td>
						<td></td>
					</tr>
					<tr>
						<td className={styles.documentTableList}>
							<p className={styles.zero}>
								<span className={classNames(styles.documentUnderline, styles.documentBold)}>Right to erasure:</span> to
								obtain from us the erasure of personal data concerning you without undue delay where:
							</p>
							<p className={styles.a}>
								the personal data are no longer necessary in relation to the purposes for which they were collected or
								otherwise processed;
							</p>
							<p className={styles.b}>
								you object to the processing based on legitimate interest where there are no overriding legitimate
								grounds for the processing;
							</p>
							<p className={styles.c}>the personal data have been unlawfully processed;</p>
							<p className={styles.d}>
								the personal data have to be erased for compliance with a legal obligation to which we are subject.
							</p>
							<p className={styles.zero}>
								We must communication to each recipient to whom the erased personal data have been disclosed, unless
								this proves impossible or involves disproportionate effort.
							</p>
							<p className={styles.zero}>We shall inform you about those recipients if you request it.</p>
							<p className={styles.zero}>
								You can exercise the right at any time by contacting RentWallet at{' '}
								<a href={`mailto: ${socialLinks.Email}`}>{socialLinks.Email}</a>
							</p>
						</td>
						<td>
							<p>Processing is necessary for:</p>
							<ul>
								<li>
									<p>
										Compliance with a legal obligation which requires processing by Union or Member State law to which
										the controller is subject or for the performance of a task carried out in the public interest or in
										the exercise of official authority vested in us; or
									</p>
								</li>
								<li>
									<p>The establishment, exercise or defence of legal claims.</p>
								</li>
							</ul>
						</td>
					</tr>
					<tr>
						<td>
							<p>
								<span className={classNames(styles.documentUnderline, styles.documentBold)}>
									Right to request the restriction of processing concerning you:
								</span>{' '}
								to obtain from us restriction of processing where:
							</p>
							<p>
								(a) the accuracy of the personal data is contested by you, for a period enabling us to verify the
								accuracy of the personal data;
							</p>
							<p>
								(b) the processing is unlawful and you oppose the erasure of the personal data and request the
								restriction of its use instead;
							</p>
							<p>
								(c) we no longer need the personal data for the purposes of the processing, but it is required by you
								for the establishment, exercise or defence of legal claims;
							</p>
							<p>
								(d) you object to the processing based on legitimate interest pending the verification whether our
								legitimate grounds override yours.
							</p>
							<p>
								We must communication to each recipient to whom the restricted personal data have been disclosed, unless
								this proves impossible or involves disproportionate effort.
							</p>
							<p>We shall inform you about those recipients if you request it.</p>
							<p>
								You can exercise the right at any time by contacting RentWallet at{' '}
								<a href={`mailto: ${socialLinks.Email}`}>{socialLinks.Email}</a>
							</p>
						</td>
						<td className={styles.documentTableList}>
							<p className={styles.zero}>
								Where processing has been restricted under this right, such personal data shall, with the exception of
								storage, only be processed:
							</p>
							<p className={styles.a}>with your consent; or </p>
							<p className={styles.b}>for the establishment, exercise or defence of legal claims; or </p>
							<p className={styles.c}>for the protection of the rights of another natural or legal person; or </p>
							<p className={styles.d}>for reasons of important public interest of the Union or of a Member State.</p>
						</td>
					</tr>
					<tr>
						<td>
							<p>
								<span className={classNames(styles.documentUnderline, styles.documentBold)}>
									The right to data portability:
								</span>{' '}
								to receive the personal data concerning you which you have provided to us, in a structured, commonly
								used and machine-readable format and have the right to transmit those data to another controller without
								hindrance from us, where:
							</p>
							<p>
								(a) the processing is based on consent or is necessary for the performance of a contract to which you
								are party or in order to take steps at your request prior to entering into a contract; and
							</p>
							<p>(b) the processing is carried out by automated means.</p>
							<p>The exercise of this right shall be without prejudice to the right to erasure.</p>
							<p>
								You have the right to have the personal data transmitted directly from us to another controller, where
								technically feasible.
							</p>
							<p>
								You can exercise the right at any time by contacting RentWallet at{' '}
								<a href={`mailto: ${socialLinks.Email}`}>{socialLinks.Email}</a>
							</p>
						</td>
						<td>
							<p>
								That right shall not apply to processing necessary for the performance of a task carried out in the
								public interest or in the exercise of official authority vested in us.
							</p>
						</td>
					</tr>
					<tr>
						<td>
							<p>
								<span className={classNames(styles.documentUnderline, styles.documentBold)}>
									The right to object to processing:
								</span>{' '}
								to object, on grounds relating to your particular situation, at any time to processing of personal data
								concerning you which is based on processing necessary for the purposes of the legitimate interests
								pursued by us or a third party (except where such interests are overridden by your interests or
								fundamental rights and freedoms which require protection of personal data), including profiling.
							</p>
							<p>
								You can exercise the right at any time by contacting RentWallet at{' '}
								<a href={`mailto: ${socialLinks.Email}`}>{socialLinks.Email}</a>
							</p>
						</td>
						<td className={styles.documentTableList}>
							<p className={styles.zero}>Where:</p>
							<p className={styles.a}>
								we demonstrate compelling legitimate grounds for the processing which override the interests, rights and
								freedoms of the data subject; or
							</p>
							<p className={styles.b}>for the establishment, exercise or defence of legal claims.</p>
						</td>
					</tr>
					<tr>
						<td>
							<p>
								<span className={classNames(styles.documentUnderline, styles.documentBold)}>
									The right to ask us not to process your personal data for direct marketing purposes:
								</span>{' '}
								to object at any time to processing of personal data concerning you for such marketing, which includes
								profiling to the extent that it is related to such direct marketing.
							</p>
							<p>
								You have the right to ask RentWallet not to process your personal data for marketing purposes.
								RentWallet will usually inform you (before collecting your data) if it intends to use your data for such
								purposes or if it intends to disclose your information to any third party for such purposes. You can
								exercise your right to prevent such processing by checking certain boxes on the forms used to collect
								your data.
							</p>
							<p>
								You can also exercise the right at any time by contacting RentWallet at{' '}
								<a href={`mailto: ${socialLinks.Email}`}>{socialLinks.Email}</a>
							</p>
						</td>
						<td></td>
					</tr>
					<tr>
						<td>
							<p>
								<span className={classNames(styles.documentUnderline, styles.documentBold)}>
									The right not to be subject to automated individual decision-making, including profiling:
								</span>{' '}
								to not be subject to a decision based solely on automated processing, including profiling, which
								produces legal effects concerning you or similarly significantly affects you.
							</p>
							<p>
								You can exercise the right at any time by contacting RentWallet at{' '}
								<a href={`mailto: ${socialLinks.Email}`}>{socialLinks.Email}</a>
							</p>
						</td>
						<td className={styles.documentTableList}>
							<p className={styles.zero}>If the decision:</p>
							<p className={styles.a}>
								is necessary for entering into, or performance of, a contract between you and us;
							</p>
							<p className={styles.b}>
								is authorised by Union or Member State law to which we are subject and which also lays down suitable
								measures to safeguard the data subject's rights and freedoms and legitimate interests; or
							</p>
							<p className={styles.c}>is based on the data subject's explicit consent.</p>
							<p className={styles.zero}>
								In the cases referred to in points (a) and (c) we shall implement suitable measures to safeguard the
								data subject's rights and freedoms and legitimate interests, at least the right to obtain human
								intervention on our part, to express his or her point of view and to contest the decision.
							</p>
						</td>
					</tr>
				</table>
			</div>

			<div>
				<a href="/PrivacyPolicy.pdf" download>
					Download RentWallet Privacy Policy and Cookies
				</a>
			</div>
		</div>
	)
}

export default Policy
