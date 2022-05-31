import React from 'react'

import classNames from 'classnames'

import styles from '@pages/UnAuthPages/LandingPage/Landing/Documents/styles.module.scss'
import stylesLanding from '@pages/UnAuthPages/LandingPage/Landing/styles.module.scss'
import { socialLinks } from '@utils/constants'

const Terms = (): JSX.Element => {
	return (
		<div className={classNames(stylesLanding.landingContainer, styles.documentContainer)}>
			{/* 1. Introduction */}
			<div className={styles.documentSection}>
				<h4>
					<span className={styles.documentNumber}>1.</span>Introduction
				</h4>
				<p className={styles.documentItalic}>
					This section explains who RentWallet is, the services we offer and our Privacy Policy and Cookies (
					<span className={styles.documentBold}>“Privacy Policy”</span>). You should read the terms and the Privacy
					Policy before agreeing to them. Email us at {socialLinks.Email} if you have any questions.
				</p>
				<p>
					<span className={styles.documentNumber}>1.1.</span>These terms and conditions (
					<span className={styles.documentBold}>“Agreement”</span>) govern the supply of the service offered by
					Rentwallet.net Limited (<span className={styles.documentBold}>“we”, “our”, “us”, “RentWallet”</span>) to
					enable landlords to access, consolidate, display and share information on rental payments received and tenants
					to initiate rental payments to landlords in or from the United Kingdom (
					<span className={styles.documentBold}>“the Service”</span>), which includes services that enable you to access
					and share information from your payment accounts (
					<span className={styles.documentBold}>“Account Information Service”</span>) and to initiate payment
					transactions (<span className={styles.documentBold}>“Payment Initiation Service”</span>), which are regulated
					under the Payment Services Regulations 2017 (together referred to in this Agreement as{' '}
					<span className={styles.documentBold}>“Payment Services”</span>). The Payment Services are made available by
					us as the registered agent of Moneyhub Financial Technology Limited (
					<span className={styles.documentBold}>“Moneyhub”</span>). Our and Moneyhub’s details are in Clause 2.
				</p>
				<p>
					<span className={styles.documentNumber}>1.2.</span>The Service may be accessed via the Rentwallet.net website
					and web application (each a<span className={styles.documentBold}>“Site”</span>) by any person or entity whose
					application to register with us we approve under Clause 3 (
					<span className={styles.documentBold}>“you”, “your”, “User”</span>).
				</p>
				<p>
					<span className={styles.documentNumber}>1.3.</span>This Agreement includes:
					<ul>
						<li>
							<span className={styles.documentNumber}>1.3.1.</span>Moneyhub’s Terms of Use (the{' '}
							<span className={styles.documentBold}>“Moneyhub Terms of Use”</span>), located at{' '}
							<a href="https://content.moneyhub.co.uk/terms/api-terms-v1.pdf" target={'_blank'} rel="noreferrer">
								https://content.moneyhub.co.uk/terms/api-terms-v1.pdf
							</a>{' '}
							and
						</li>
						<li>
							<span className={styles.documentNumber}>1.3.2.</span>our{' '}
							<span className={styles.documentBold}>Privacy Policy.</span>
						</li>
					</ul>
				</p>
				<p>
					<span className={styles.documentNumber}>1.4.</span>You should read this Agreement, the Moneyhub Terms of Use
					and our Privacy Policy before agreeing to them and using the Service. We recommend that you download a copy of
					each document for your records.
				</p>
				<p>
					<span className={styles.documentNumber}>1.5.</span>The Agreement between you and RentWallet is formed and the
					term of the Agreement shall start on the date on which we notify you that your application to register for the
					Service has been accepted under Clause 3 and the Service is available for your use and shall continue subject
					to any right to cancel or terminate it that may be specified below (
					<span className={styles.documentBold}>“Term”</span>). The Term will continue for as long as you have
					RentWallet Account or until you or we terminate the Agreement in accordance with these Terms, whichever
					happens first.
				</p>
				<p>
					<span className={styles.documentNumber}>1.6.</span>This Agreement is for users who are individual people, or
					businesses who meet the eligibility requirements in Clause 3.1. Businesses should have an annual turnover
					and/or annual balance sheet total that does not exceed €2 million and have fewer than ten (10) employees, or
					charities with annual income of less than £1 million. If you wish to use the Service but do not fit any of
					these descriptions, please contact us at <a href={`mailto: ${socialLinks.Email}`}>{socialLinks.Email}</a>.
				</p>
				<p>
					<span className={styles.documentNumber}>1.7.</span>We offer paid for services for subscription fee (
					<span className={styles.documentBold}>“Fee”</span>). The details are set in Clause 11.2.
				</p>
				<p>
					<span className={styles.documentNumber}>1.8.</span>You shall be entitled to cancel this Agreement within the
					14 day period that begins on the day after you enter into it (
					<span className={styles.documentBold}>“Statutory Cancellation Period”</span>). The details are set in Clause.{' '}
					<span className={styles.documentNumber}>11.5.</span> In the event that you cancel this Agreement during the
					Statutory Cancellation Period, any agreements that you agreed in relation to that cancelled Offer during the
					Statutory Cancellation Period will also be cancelled automatically. You may exercise your right of
					cancellation by emailing us to that effect at <a href={`mailto: ${socialLinks.Email}`}>{socialLinks.Email}</a>
					.
				</p>
				<p>
					<span className={styles.documentNumber}>1.9.</span>The information provided via the Service is intended solely
					for use by persons and organisations that meet the eligibility criteria set out in Clause 3.1. The Service is
					not intended for distribution to, or use by, any person or entity in any jurisdiction where such distribution
					or use would be contrary to any applicable local law, regulation or rule.
				</p>
				<p>
					<span className={styles.documentNumber}>1.10.</span>This Agreement is concluded in the English language and
					all communications (including any notices or the information being transmitted) shall be in English. In the
					event that the Agreement is translated into any other language (whether for your convenience or otherwise),
					the English language text of the Agreement shall prevail.
				</p>
				<p>
					<span className={styles.documentNumber}>1.11.</span>Any questions regarding the service provided through this
					Agreement should be directed to us at <a href={`mailto: ${socialLinks.Email}`}>{socialLinks.Email}</a> unless
					otherwise advised by us.
				</p>
			</div>

			{/* 2. Information about us */}
			<div className={styles.documentSection}>
				<h4>
					<span className={styles.documentNumber}>2.</span>Information about us
				</h4>
				<p>
					Rentwallet.net Limited is a company incorporated in England and Wales (company number 13089273) with
					registered office and principal trading address at Lygon House, 50 London Road, Bromley, Kent BR1 3RA, United
					Kingdom. We are registered with the Information Commissioner (No. ZA858955). Rentwallet.net Limited is acting
					as an agent of Moneyhub for the provision of the Payment Services. Moneyhub’s details are set out in Clause
					2.1 of the Moneyhub Terms of Use, located at{' '}
					<a href="https://content.moneyhub.co.uk/terms/api-terms-v1.pdf" target={'_blank'} rel="noreferrer">
						https://content.moneyhub.co.uk/terms/api-terms-v1.pdf
					</a>
					.
				</p>
			</div>

			{/* 3. Access to the Service */}
			<div className={styles.documentSection}>
				<h4>
					<span className={styles.documentNumber}>3.</span>Access to the Service
				</h4>
				<p className={styles.documentItalic}>
					This section explains who is allowed to use the Service, how to access it, when the service and our staff are
					available and which laws apply. It also explains what to do if you think someone else is using the service
					without your approval. You should download and keep records of what you do on the service.
				</p>
				<p>
					<span className={styles.documentNumber}>3.1.</span>To be eligible to use the Service, you must be:
					<ul>
						<li>
							<span className={styles.documentAbc}>(a)</span>an individual or sole trader over the age of 18 who is
							resident in the United Kingdom (<span className={styles.documentBold}>“UK”</span>); or
						</li>
						<li>
							<span className={styles.documentAbc}>(b)</span>a company incorporated in the UK; or
						</li>
						<li>
							<span className={styles.documentAbc}>(c)</span>a partnership established in the UK comprising individuals
							who are over the age of 18 and resident in the UK and/or companies incorporated in the UK.
						</li>
					</ul>
				</p>
				<p>
					<span className={styles.documentNumber}>3.2.</span>You must not register on the Service more than once or
					register on the Service Website on behalf of an individual other than yourself, or register on the Service
					Website on behalf of any entity without that entity's prior written authorisation.
				</p>
				<p>
					<span className={styles.documentNumber}>3.3.</span>We agree to provide the Service with reasonable skill and
					care and in accordance with all applicable laws, regulations and the Financial Conduct Authority (
					<span className={styles.documentBold}>“FCA”</span>) rules (
					<span className={styles.documentBold}>“Applicable Law”</span>).
				</p>
				<p>
					<span className={styles.documentNumber}>3.4.</span>We shall use commercially reasonable endeavours to make the
					Services available 24 hours a day, seven days a week, except for routine and emergency maintenance. However,
					access to the Service is not guaranteed. Subject to the provisions of this Agreement to the extent that they
					relate to the Payment Services as required by Applicable Law:
					<ul>
						<li>
							<span className={styles.documentAbc}>(a)</span>from time to time we may withdraw or amend any of the
							content and Service provided without notice;
						</li>
						<li>
							<span className={styles.documentAbc}>(b)</span>we will not be liable if the Service or any content is
							unavailable at any time for any reason;
						</li>
						<li>
							<span className={styles.documentAbc}>(c)</span>From time to time, we may restrict access to some parts of
							the Service, or the entire Service.
						</li>
					</ul>
				</p>
				<p>
					<span className={styles.documentNumber}>3.5.</span>You are responsible for making all arrangements necessary
					for you to have access to the Service (for example ensuring you have an available internet connection).
				</p>
				<p>
					<span className={styles.documentNumber}>3.6.</span>If we accept your application to use the Service and create
					an account (<span className={styles.documentBold}>“RentWallet Account”</span>) with us, you will require a
					valid email address and will be asked to enter a username, password and any other piece of information we deem
					necessary as part of our security procedures for your use in accessing information or initiating payment order
					from a specified payment account held by you with another payment service provider (
					<span className={styles.documentBold}>“Passcodes”</span>).
				</p>
				<p>
					<span className={styles.documentNumber}>3.7.</span>You must keep the Passcodes secret and make sure that they
					are not stored on your workstation or otherwise in a way that enables others to impersonate you but are
					memorised and any record of the Passcodes destroyed or deleted. You must periodically change the Passcodes in
					accordance with the periods of time and procedures established by us for doing so.
				</p>
				<p>
					<span className={styles.documentNumber}>3.8.</span>You must provide us with your contact details in the form
					of your email address, and any other details we collect from you at registration, so that we can administer
					the Service and your RentWallet Account. You must not impersonate or try to impersonate another person when
					providing us with information.
				</p>
				<p>
					<span className={styles.documentNumber}>3.9.</span>Each time you seek to access the Service, we will check
					your identity by asking for Passcodes. As long as the correct Passcodes are entered, we will assume that you
					are the person giving instructions and making transactions and you will be liable for them, except to the
					extent provided for in Clause 3.11.
				</p>
				<p>
					<span className={styles.documentNumber}>3.10.</span>If you disclose the Passcodes to any other person or
					entity whom you employ or otherwise retain, appoint or authorise to access the Service on your behalf, you are
					also responsible and liable for any access, use or misuse or disclosure of your Passcodes or Service by such
					person or entity.
				</p>
				<p>
					<span className={styles.documentNumber}>3.11.</span>If you think that someone else may have access to, or be
					using, your Passcodes or RentWallet Account without your consent, you must tell us immediately by emailing{' '}
					<a href={`mailto: ${socialLinks.Email}`}>{socialLinks.Email}</a>. You will be asked to provide information to
					enable us to verify your identity. Following satisfactory completion of the verification process, we will
					immediately prevent further unauthorised use, including blocking the use of the Passcodes and issue
					replacements.
				</p>
				<p>
					<span className={styles.documentNumber}>3.12.</span>You certify that all information you provide in the
					registration is accurate. You must have a valid email address registered with us at all times. If an email
					that we send to you should bounce for some reason, your RentWallet Account may be temporarily suspended until
					you contact us with a verifiable address.
				</p>
				<p>
					<span className={styles.documentNumber}>3.13.</span>We can refuse to act on any instruction that we believe:
					(i) was unclear; (ii) was not given by or with your authority; (iii) might cause us or any of our partners to
					breach a legal or other duty; or (iv) involves the use of the Service for an illegal purpose.
				</p>
				<p>
					<span className={styles.documentNumber}>3.14.</span>Subject to the provisions of Clause 14, unless and until
					you notify Customer Service that you believe that someone else can use the Service by impersonating you:
					<ul>
						<li>
							<span className={styles.documentAbc}>(a)</span>you will be responsible for any instruction which we
							receive and act on, even if it was not given by you; and
						</li>
						<li>
							<span className={styles.documentAbc}>(b)</span>we will not be responsible for any unauthorised access to
							confidential information about you in the Service.
						</li>
					</ul>
				</p>
				<p>
					<span className={styles.documentNumber}>3.15.</span>If we believe you have acted fraudulently, or if we
					believe you have intentionally or with gross negligence failed to keep your means of interacting with us or
					the Service secure and confidential at all times, we will hold you liable for all transactions and any
					associated fees.
				</p>
				<p>
					<span className={styles.documentNumber}>3.16.</span>We will do all that we reasonably can to prevent
					unauthorised access to the Service. As long as you have not breached the other terms contained in this Clause
					3, we will accept liability for any loss or damage to you resulting directly from any unauthorised access to
					the Service (see Clause 14 of this Agreement for limits on our liability).
				</p>
				<p>
					<span className={styles.documentNumber}>3.17.</span>You agree to provide us or your PSP (as the case may be)
					with the necessary payment order information, including support documents requested, such as invoice(s) and/or
					related contract with the person or entity you intend to pay (
					<span className={styles.documentBold}>“Payee”</span>).
				</p>
				<p>
					<span className={styles.documentNumber}>3.18.</span>Except as required by Applicable Law, we shall not be
					responsible, and you will be solely responsible, for (a) compiling and retaining permanent records of all your
					use of the Service, and (b) reconciling all transaction activity between your own system or device and the
					Service.
				</p>
				<p>
					<span className={styles.documentNumber}>3.19.</span>Upon the termination of this Agreement for any reason, we
					shall have no obligation to you to store, retain, report, or otherwise provide any copies of, or access to,
					any records, documentation or other information in connection with the Service (but we may do so to comply
					with our obligations under Applicable Law). Usernames are unique and can only be used once. Upon the
					termination of this Agreement the username will no longer be available for use on any future accounts and
					cannot be reclaimed.
				</p>
				<p>
					<span className={styles.documentNumber}>3.20.</span>You may not access the Service if you are a direct
					competitor of RentWallet, except with RentWallet’s express prior written consent. You may not access the
					Service for competitive purposes.
				</p>
				<p>
					<span className={styles.documentNumber}>3.21.</span>We shall use commercially reasonable endeavours to make
					the Payment Services available to you 24 hours a day, but our Customer Service staff would only be available
					between 09:00 and 17:00 GMT on each day that banks are open for business in the UK (
					<span className={styles.documentBold}>“Business Day”</span>), except for planned maintenance and unscheduled
					maintenance, provided that we have used reasonable endeavours to notify you that this will occur or has
					occurred.
				</p>
				<p>
					<span className={styles.documentNumber}>3.22.</span>Unless otherwise agreed by us in writing, you acknowledge
					and agree that you shall (at your own cost) be solely responsible throughout the Term for the provision of all
					equipment, software, systems and telecommunications facilities which are required to enable you to receive the
					Service.
				</p>
			</div>

			{/* 4. Services */}
			<div className={styles.documentSection}>
				<h4>
					<span className={styles.documentNumber}>4.</span>Services
				</h4>
				<p className={styles.documentItalic}>
					This section covers all our services. It explains what we’ll do if we or a payment provider suspect any
					strange activity, and that we record calls and other messages.
				</p>
				<p>
					<span className={styles.documentNumber}>4.1.</span>Your use of the Payment Services is subject to the Moneyhub
					Terms of Use located at{' '}
					<a href="https://content.moneyhub.co.uk/terms/api-terms-v1.pdf" target={'_blank'} rel="noreferrer">
						https://content.moneyhub.co.uk/terms/api-terms-v1.pdf
					</a>
					.
				</p>
				<p>
					<span className={styles.documentNumber}>4.2.</span>Unless otherwise specified in this Agreement, to use the
					Services you must log-in to your RentWallet Account with your Passcodes and follow the relevant instructions.
				</p>
				<p>
					<span className={styles.documentNumber}>4.3.</span>We may restrict or suspend your use of the Service without
					notice if: we, Moneyhub or your PSP identify or suspect that suspicious, fraudulent or illegal activities are
					being carried out in relation to your use of the Service; if we, Moneyhub or your PSP believe you have not
					complied with this Agreement; or in the event of exceptional circumstances which prohibit the normal operation
					of the Service.
				</p>
				<p>
					<span className={styles.documentNumber}>4.4.</span>Unless it would be unlawful for us to do so or it is
					impracticable, where we stop or suspend the use of the Service in accordance Clause 4.3, we will notify you of
					this and our reasons for doing so, by sending an email to the email address you have provided to us. Where it
					is not possible to notify you before we stop or suspend the Service, we will notify you as soon as possible
					afterwards. We will reinstate your access to the Service or initiate any suspended payment order as soon as
					practicable after the reasons pursuant to Clause 4.3 no longer apply or exist.
				</p>
				<p>
					<span className={styles.documentNumber}>4.5.</span>We have the right to record the telephone calls with each
					Customer, as well as any use or attempted use of the Service and any other digital communications with you
					and, if necessary, to use the recordings as evidence of such calls, sessions or communications.
				</p>
			</div>

			{/* 5. Information, not advice */}
			<div className={styles.documentSection}>
				<h4>
					<span className={styles.documentNumber}>5.</span>Information, not advice
				</h4>
				<p className={styles.documentItalic}>
					This section explains that information available through the Service is not any form of advice or
					recommendation. You can use the Service to send account information to your advisers, but we are not
					responsible for the information or how they use it to advise or act for you.
				</p>
				<p>
					Contributions, articles, commentary, charts, data visualisations, text, graphics, still and moving images and
					other information posted within or available through our Service (
					<span className={styles.documentBold}>“Content”</span>) is provided for general information only. Content is
					not, and should not be construed as, financial or other professional advice. You should not rely on the
					Content within our Service as the basis for making a financial decision. If in doubt, you should seek
					professional advice. Subject to the provisions of Clause 14, we therefore disclaim all liability and
					responsibility arising from any reliance placed on Content by you or any user of our Service, or by anyone who
					may be informed of any of the Content.
				</p>
			</div>

			{/* 6. Prohibited uses */}
			<div className={styles.documentSection}>
				<h4>
					<span className={styles.documentNumber}>6.</span>Prohibited uses
				</h4>
				<p className={styles.documentItalic}>
					You must use our service lawfully, and not use it for any of the things listed here.
				</p>
				<p>
					<span className={styles.documentNumber}>6.1.</span>You must use the Service only for lawful purposes.
				</p>
				<p>
					<span className={styles.documentNumber}>6.2.</span>You must not use the Service:
					<ul>
						<li>
							<span className={styles.documentAbc}>(a)</span>in any way that breaches any Applicable Law;
						</li>
						<li>
							<span className={styles.documentAbc}>(b)</span>in any way that is unlawful or fraudulent, or has any
							unlawful or fraudulent purpose or effect;
						</li>
						<li>
							<span className={styles.documentAbc}>(c)</span>for the purpose of harming or attempting to harm any person
							in any way;
						</li>
						<li>
							<span className={styles.documentAbc}>(d)</span>to send, knowingly receive, upload, download, use or re-use
							any material which is defamatory, contains any material which is obscene, offensive, hateful or
							inflammatory, promotes sexually explicit material, promotes violence, or promotes discrimination based on
							race, sex, religion, nationality, disability, sexual orientation or age;
						</li>
						<li>
							<span className={styles.documentAbc}>(e)</span>to send, knowingly receive, upload, download, use or re-use
							any material which is the private information of any third party, including, without limitation,
							addresses, phone numbers, email addresses, National Insurance numbers or other identifiers, credit card
							numbers and/or debit card numbers and/or which is likely to deceive any person, be made in breach of any
							legal duty owed to a third party, such as a contractual duty or a duty of confidence, promote any illegal
							activity, be threatening, abuse or invade another’s privacy, or cause annoyance, inconvenience or needless
							anxiety, be likely to harass, upset, embarrass, alarm or annoy any other person, be used to impersonate
							any person, or to misrepresent your identity or affiliation with any person, gives the impression that it
							emanates from us, advocates, promotes or assists any unlawful act such as (by way of example only)
							copyright infringement or computer misuse;
						</li>
						<li>
							<span className={styles.documentAbc}>(f)</span>to transmit, or procure the sending of, any unsolicited or
							unauthorised advertising or promotional material, "junk mail", "spam", "chain letters", "pyramid schemes"
							or any other form of solicitation;
						</li>
						<li>
							<span className={styles.documentAbc}>(g)</span>to harvest or collect email addresses or other financial,
							personal or contact information of other users of the Service from the Service by electronic or other
							means for the purposes of sending unsolicited communications;
						</li>
						<li>
							<span className={styles.documentAbc}>(h)</span>to impersonate any person or entity, or falsely state or
							otherwise misrepresent yourself, your age, your financial employment or personal circumstances or your
							affiliation with any person or entity;
						</li>
						<li>
							<span className={styles.documentAbc}>(i)</span>to solicit personal information from anyone under 18 or
							solicit passwords or personally identifying information for commercial or unlawful purposes.
						</li>
					</ul>
				</p>
				<p>
					<span className={styles.documentNumber}>6.3.</span>You also agree:
					<ul>
						<li>
							<span className={styles.documentAbc}>(a)</span>not to use or attempt to use another's account, service or
							system without authorisation from us, or create a false identity in relation to the Service;
						</li>
						<li>
							<span className={styles.documentAbc}>(b)</span>not to do or say anything that would bring the Service or
							RentWallet into disrepute.
						</li>
					</ul>
				</p>
			</div>

			{/* 7.  Viruses, hacking and other offences */}
			<div className={styles.documentSection}>
				<h4>
					<span className={styles.documentNumber}>7.</span>Viruses, hacking and other offences
				</h4>
				<p className={styles.documentItalic}>You must not abuse the service and lists things you must not do to it.</p>
				<p>
					<span className={styles.documentNumber}>7.1.</span>You must not misuse the Service by knowingly introducing
					viruses, trojans, worms, logic bombs or other material which is malicious or technologically harmful or any
					computer code, files or programs designed to interrupt, destroy or limit the functionality of any computer
					software or hardware or telecommunications equipment. You must not attempt to gain unauthorised access to the
					Service, the server/servers on which the Service or any part of it is stored or any server, computer or
					database connected to the Service. You must not attack the Service via a denial-of-service attack or a
					distributed denial-of service attack or in any other way use the Service or the Site in any unlawful manner or
					in any other manner that could damage, disable, overload or impair the Service or the Site or the servers on
					which it is hosted.
				</p>
				<p>
					<span className={styles.documentNumber}>7.2.</span>By breaching this provision, you could commit a criminal
					offence under the Computer Misuse Act 1990. We will report any such breach to the relevant law enforcement
					authorities and we will co-operate with those authorities by disclosing your identity to them. In the event of
					such a breach, your right to use our Service will cease immediately.
				</p>
				<p>
					<span className={styles.documentNumber}>7.3.</span>We will not be liable for any loss or damage caused by a
					distributed denial-of-service attack, viruses or other technologically harmful material that may infect your
					computer equipment, computer programs, data or other proprietary material due to your use of the Service or to
					your downloading of any material posted on it, or on any website linked to it.
				</p>
				<p>
					<span className={styles.documentNumber}>7.4.</span>You must not access without authority, interfere with,
					damage or disrupt:
					<ul>
						<li>
							<span className={styles.documentAbc}>(a)</span>any part of the Service;
						</li>
						<li>
							<span className={styles.documentAbc}>(b)</span>any equipment or network on which the Service is stored;
						</li>
						<li>
							<span className={styles.documentAbc}>(c)</span>any software used in the provision of the Service; or
						</li>
						<li>
							<span className={styles.documentAbc}>(d)</span>any equipment or network or software owned or used by any
							third party;
						</li>
					</ul>
				</p>
			</div>

			{/* 8. Licence and Intellectual Property Rights */}
			<div className={styles.documentSection}>
				<h4>
					<span className={styles.documentNumber}>8.</span>Licence and Intellectual Property Rights
				</h4>
				<p className={styles.documentItalic}>
					This section explains who owns the rights to the information in the Service, what permission we give each
					other to use that information and any restrictions or limits on that use.
				</p>
				<p>
					<span className={styles.documentNumber}>8.1</span>We are the owner or the licensee of all Intellectual
					Property Rights in the Service, and the Content that we provide you via the Service (
					<span className={styles.documentBold}>“RentWallet Content”</span>). Those works are protected by copyright
					laws and treaties around the world. All such rights are reserved. For the purpose of this Agreement,{' '}
					<span className={styles.documentBold}>“Intellectual Property Right”</span> means copyright, database right or
					trade mark, patent, moral right, design right, registered design, service mark, domain name, unregistered
					design or other intellectual property right anywhere in the world of any other person.
				</p>
				<p>
					<span className={styles.documentNumber}>8.2</span>We grant to you during the Term a non-exclusive,
					non-transferable, revocable, licence in the UK to print off, and to download extracts, of any the RentWallet
					Content for your own personal or internal business purposes subject to the provisions of this Agreement (and
					not for use by or for the benefit of any person other than your employee(s)) and not for commercial use or
					exploitation. You must not modify the paper or digital copies of any Content you have printed off or
					downloaded in any way, and you must not use any illustrations, photographs, video or audio sequences or any
					graphics separately from any accompanying text. Our status (and that of any identified contributors) as the
					authors of the RentWallet Content must always be acknowledged. Nothing in this Clause 8 shall affect your
					rights under Applicable Law.
				</p>
				<p>
					<span className={styles.documentNumber}>8.3</span>When you post or upload Content to the Service (
					<span className={styles.documentBold}>“User Content”</span>), you authorise and direct us to make such copies
					of it as we consider necessary in order to facilitate the publication, display and storage of the User Content
					in relation to the Service or on the Site. By posting User Content to any part of the Service, you
					automatically grant, and you represent and warrant that you have the right to grant, to us an irrevocable,
					perpetual, non-exclusive, transferable, fully paid, worldwide licence (with the right to sub-licence) to use,
					copy, publicly perform, publicly display, reformat, translate, excerpt (in whole or in part) and distribute
					such User Content for any purpose on or in connection with the Service or the promotion of it, to prepare
					derivative works of, or incorporate into other works, such User Content, and to grant and authorise
					sub-licences of the foregoing. You may remove your User Content from the Service at any time, subject to the
					provisions of Clauses 3.18 and 3.19. If you choose to remove your User Content, the licence granted above will
					automatically expire, however you acknowledge that we may retain archived copies of your User Content.
				</p>
				<p>
					<span className={styles.documentNumber}>8.4</span>You agree, and undertake not to use the Service to:
					<ul>
						<li>
							<span className={styles.documentAbc}>(a)</span>reproduce, duplicate, copy or re-sell any part of the
							Service;
						</li>
						<li>
							<span className={styles.documentAbc}>(b)</span>reverse engineer or reverse compile any of the technology
							used to provide you with the Service, including but not limited to, any applications or computer programs
							associated with the Service;
						</li>
						<li>
							<span className={styles.documentAbc}>(c)</span>use the Service or the Site in such a way so as to remove
							the copyright or trade mark notice(s) from any copies of any Content made in accordance with this
							Agreement;
						</li>
						<li>
							<span className={styles.documentAbc}>(d)</span>send, knowingly receive, upload, download, use or re-use
							any material which infringes any Intellectual Property Rights;
						</li>
						<li>
							<span className={styles.documentAbc}>(e)</span>create a database (electronic or otherwise) that includes
							material downloaded or otherwise obtained from the Service except where expressly permitted under Clause
							8.2 of this Agreement);
						</li>
						<li>
							<span className={styles.documentAbc}>(f)</span>use automated scripts to collect Content from or otherwise
							interact with the Service or the Site;
						</li>
						<li>
							<span className={styles.documentAbc}>(g)</span>transmit, re-circulate, extract, use, reutilise, exploit,
							distribute, redistribute, disseminate, re-disseminate, copy or store any Content except where expressly
							permitted by us on the Service or otherwise in writing);
						</li>
						<li>
							<span className={styles.documentAbc}>(h)</span>promote or attempt to promote or market any goods or
							services for your own financial benefit.
						</li>
						<li>
							<span className={styles.documentAbc}>(i)</span>in any way commercially exploit any of the Content without
							our prior written consent (which may be withheld for any reason):
						</li>
						<li>
							<span className={styles.documentAbc}>(j)</span>make any of the Content accessible (including the provision
							of access through a database or other application populated with the Content for re-selling,
							sub-licencing, transferring or disclosing the Content) by any means, including any electronic means; or
						</li>
						<li>
							<span className={styles.documentAbc}>(k)</span>combine any Content with other information or adapt the
							Content wholly or in part.
						</li>
					</ul>
				</p>
				<p>
					<span className={styles.documentNumber}>8.5</span>We may rely on certain service providers to help us to
					deliver the Service to you, for example, third party technology companies who may provide elements of the
					Service’s functionality (<span className={styles.documentBold}>“Third Party Service Providers”</span>). By
					using the Service, you agree to grant us and our Third Party Service Providers, a non-exclusive, royalty free
					and worldwide licence to use the information, materials, data and other content that you provide via the
					Service (<span className={styles.documentBold}>“Content”</span>). We and the Third Party Service Providers may
					use, modify, display, distribute and create derivative materials using the Content for the purpose of
					providing the Service to you.
				</p>
				<p>
					<span className={styles.documentNumber}>8.6</span>You are solely responsible for your User Content. You must
					not post, transmit, or share User Content on the Service that you did not create or that you do not have
					permission to display, publish or post. You understand and agree that we may, but are not obliged to, review
					the Service or the Site and may delete or remove (without notice) any User Content in our sole and absolute
					discretion, for any reason or no reason, including without limitation User Content that in our own absolute
					discretion violates any provision(s) of this Agreement. You are solely responsible at your own cost and
					expense for creating backup copies and replacing any User Content.
				</p>
				<p>
					<span className={styles.documentNumber}>8.7</span>You are solely responsible for your interactions with other
					users. We reserve the right, but have no obligation, to monitor disputes between you and other users.
				</p>
				<p>
					<span className={styles.documentNumber}>8.8</span>Subject to the provisions of this Agreement, we are not
					responsible for third party Content downloaded or any Content posted by users in relation to the Service or on
					the Site.
				</p>
			</div>

			{/* 9. Links by you to and from our Service */}
			<div className={styles.documentSection}>
				<h4>
					<span className={styles.documentNumber}>9.</span>Links by you to and from our Service
				</h4>
				<p className={styles.documentItalic}>
					Links from the Service to other provider’s websites and apps are provided only for convenience or information
					and are not our responsibility. You should check who is responsible for those websites and apps, and read any
					terms that apply.
				</p>
				<p>
					<span className={styles.documentNumber}>9.1.</span>You may link to the home page of our Service and not to any
					page of the Service or Site that is not the home page, provided you do so in a way that is fair and lawful and
					does not damage our reputation or take advantage of it, but you must not establish a link in such a way as to
					suggest any form of association, approval or endorsement on our part where none exists. The website from which
					you are linking must comply in all respects with any content standards set out in this Agreement. The Service
					must not be framed on any other site and you must not display the Contents or allow any Content to be
					displayed surrounded or framed or otherwise surrounded by material not originating from us without our prior
					written consent.
				</p>
				<p>
					<span className={styles.documentNumber}>9.2.</span>If you wish to make any use of material on the Service
					other than that set out above, please address your request to{' '}
					<a href={`mailto: ${socialLinks.Email}`}>{socialLinks.Email}</a>.
				</p>
				<p>
					<span className={styles.documentNumber}>9.3.</span>Where the Service contains links to other sites and
					resources provided by anyone other than RentWallet, these links are provided for your information only. We do
					not recommend and have no control over the contents of those sites or resources, and accept no responsibility
					for them or for any loss or damage that may arise from your use of them.
				</p>
			</div>

			{/* 10. Information about you and your use of the Service */}
			<div className={styles.documentSection}>
				<h4>
					<span className={styles.documentNumber}>10.</span>Information about you and your use of the Service
				</h4>
				<p className={styles.documentItalic}>
					This section explains our privacy policy, which covers your personal data. Important for you to read that.
				</p>
				<p>
					Our Privacy Policy (which is incorporated by reference into this Agreement under Clause 1.3) provides you with
					the information required by the Data Protection Act 2018 and related acts and regulations governing the use
					and processing of personal data by persons established in the UK (
					<span className={styles.documentBold}>“Data Protection Laws”</span>), including details of the personal data
					that we collect, as well as the purposes and legal bases for processing such personal data.
				</p>
			</div>

			{/* 11. Trials, Fee, Payment Plans... */}
			<div className={styles.documentSection}>
				<h4>
					<span className={styles.documentNumber}>11.</span>Trials, Fee, Payment Plans, Subscription Term, Statutory
					Cancellation Period, Payments, Refund and Taxes
				</h4>
				<p className={styles.documentItalic}>
					This section explains that some of the service may be available free of charge and extra features or content
					might have to be paid for and on what terms. The section also explains how Statutory Cancellation Period
					works. We may change fees on 2 months’ notice and there are no refunds.
				</p>
				<p>
					<span className={classNames(styles.documentNumber, styles.documentBold)}>11.1. </span>
					<span className={classNames(styles.documentUnderline, styles.documentBold)}>Trials.</span>
				</p>
				<p>
					<span className={styles.documentNumber}>11.1.1.</span>We offer trials of RentWallet functionality for
					specified period of time without payment (<span className={styles.documentBold}>“Trial”</span>). We may
					determine your eligibility for a Trial, and withdraw or modify a Trial at any time without prior notice and
					with no liability, to the extent permitted under applicable law.
				</p>
				<p>
					<span className={styles.documentNumber}>11.1.2.</span>The Trial functionality is limited and equivalent to
					functionality under Payment Plan <span className={styles.documentBold}>Light</span>.
				</p>
				<p>
					<span className={styles.documentNumber}>11.1.3.</span>The Trial period is one (1) calendar month from the date
					of your RentWallet account activation. You will receive corresponding email on the day of activation.
				</p>
				<p>
					<span className={styles.documentBold}>Calendar month</span> is a period of time commencing on the day of your
					account activation and ending immediately before the beginning of the corresponding day of the next month or,
					if there is no such corresponding day, ending at the expiration of the next month. For example, if your
					RentWallet account is activated on the 10th of August then the Trial will expire immediately before 00.00 on
					the 10th of September (or in other words at 24.00 on the 9th of September). In case of your RentWallet account
					is activated on the 30th or 31st of January then the Trial will expire at 24.00 on the last day (28th or 29th)
					of February.
				</p>
				<p>
					<span className={styles.documentNumber}>11.1.4.</span>You must complete mandatory personal data fields under
					Account information to proceed with the Trial. You will not have the access to the Service unless your
					personal data has been fully completed.
				</p>
				<p>
					<span className={styles.documentNumber}>11.1.5.</span>The Trial period starts on the day of your RentWallet
					account activation and continues until its expiry day regardless of you have not had the access to your
					RentWallet account in accordance with Clause 11.1.4.
				</p>
				<p>
					<span className={styles.documentNumber}>11.1.6.</span>We may offer Trial extension for Payment Plans{' '}
					<span className={styles.documentBold}>“Smart” and “Advanced”</span>. We will make such Trial extensions of
					applicable services under these Payment Plans available to you and you will have the option to subscribe to
					one of these Payment Plans until the end of initial Trial (if not terminated earlier). Additional terms and
					conditions may apply and you agree to comply with any such terms and conditions.
				</p>
				<p>
					<span className={styles.documentNumber}>11.1.7.</span>We will send you two payment reminders seven (7) and one
					(1) calendar day before the expiry date of your current Trial or Trial extension.
				</p>
				<p>
					<span className={styles.documentNumber}>11.1.8.</span>Unless you subscribe to any Payment Plan before the end
					of the Trial or Trial extension, all of you data may:
					<ul>
						<li>
							<span className={styles.documentAbc}>(a)</span>be stored by us within fifteen (15) calendar days from the
							day of Trial expiry free of charge, unless you ask us to delete it;
						</li>
						<li>
							<span className={styles.documentAbc}>(b)</span>be stored by us within additional fifteen (15) calendar
							days after free storage period (Clause 11.1.7.(a)) ended, unless you ask us to delete it. We shall charge
							an administration fee of £25 to recover your data during this period. This fee is payable in advance. We
							shall proceed with your data recovery after the payment of administration fee has been received. If for
							any reason we are unable to recover your data we will reimburse this fee back to you via the same payment
							channel.
						</li>
						<li>
							<span className={styles.documentAbc}>(c)</span>be permanently deleted upon the end of thirty (30) calendar
							days period from the day of Trial expiry and we may not recover it.
						</li>
						<li>
							<span className={styles.documentAbc}>(d)</span>Additional terms and conditions may apply and you agree to
							comply with any such terms and conditions.
						</li>
					</ul>
				</p>
				<p>
					<span className={classNames(styles.documentNumber, styles.documentBold)}>11.2. </span>
					<span className={classNames(styles.documentUnderline, styles.documentBold)}>Fee.</span>
				</p>
				<p>
					<span className={styles.documentNumber}>11.2.1.</span>We charge a Fee for use of the Service. Each Payment
					Plan has a different access to the Service features. The current amount of the Fee is disclosed on the website
					and in the web application.
				</p>
				<p>
					<span className={styles.documentNumber}>11.2.2.</span>Your access to the Services is subject to your payment
					of the relevant Fee.
				</p>
				<p>
					<span className={styles.documentNumber}>11.2.3.</span>We will send you two payment reminders seven (7) and one
					(1) calendar day before the expiry date of your current Subscription Term.
				</p>
				<p>
					<span className={styles.documentNumber}>11.2.4.</span>In the event that any Fee that is due and payable is
					unpaid, we reserve the right to suspend your access to the Service and any related support, without liability
					to you, until payment is received.
				</p>
				<p>
					<span className={styles.documentNumber}>11.2.5.</span>In the event that any Fee that is due and payable is
					unpaid and your access to the Service is suspended, all of you data may:
					<ul>
						<li>
							<span className={styles.documentAbc}>(a)</span>be stored by us within fifteen (15) calendar days from the
							day of preceding subscription expiry free of charge, unless you ask us to delete it;
						</li>
						<li>
							<span className={styles.documentAbc}>(b)</span>be stored by us within additional fifteen (15) calendar
							days after free storage period (Clause 11.2.5.(a)) ended, unless you ask us to delete it. We shall charge
							an administration fee of £25 to recover your data during this period. This fee is payable in advance. We
							shall proceed with your data recovery after the payment of administration fee has been received. If for
							any reason we are unable to recover your data we will reimburse this fee back to you via the same payment
							channel.
						</li>
						<li>
							<span className={styles.documentAbc}>(c)</span>be permanently deleted upon the end of thirty (30) calendar
							days period from the day of preceding subscription expiry and we may not recover it.
						</li>
						<li>
							<span className={styles.documentAbc}>(d)</span>Additional terms and conditions may apply and you agree to
							comply with any such terms and conditions.
						</li>
					</ul>
				</p>
				<p>
					<span className={styles.documentNumber}>11.2.6.</span>Fee shall be paid on monthly or other periodic basis in
					accordance with applicable Payment Plan. All Fees and charges are payable in advance and non-refundable,
					including in the case of unused subscription periods or after termination or cancellation, unless otherwise
					disclosed at the time of subscription.
				</p>
				<p>
					<span className={styles.documentNumber}>11.2.7.</span>In case you change from one Payment Plan to another or
					you change from one Subscription Term to another Subscription Term the change shall take effect at the
					beginning of the new billing period after the current subscription term is expired.
				</p>
				<p>
					<span className={styles.documentNumber}>11.2.8.</span>The renewal Fee will be the same as the initial charges
					unless you are otherwise notified in advance. We may change our Fee from time to time to reflect legitimate
					cost increases or reductions in operating the Service under this Agreement. We will give you 2 months’ notice
					of any change in our Fee in accordance with Clause 19 (Amendments). Fee changes will take effect at the start
					of the next subscription period following the date of the Fee change. Subject to applicable law, you accept
					the new Fee by continuing to use the RentWallet after the Fee change takes effect. If you do not agree with
					the Fee changes, you have the right to reject the change by unsubscribing from the Payment Plan prior to the
					Fee change going into effect.
				</p>
				<p>
					<span className={styles.documentNumber}>11.2.9.</span>All amounts due to us and unpaid under this Agreement
					shall become due immediately on its termination.
				</p>
				<p>
					<span className={classNames(styles.documentNumber, styles.documentBold)}>11.3. </span>
					<span className={classNames(styles.documentUnderline, styles.documentBold)}>Payment Plans.</span>
				</p>
				<p>
					<span className={styles.documentNumber}>11.3.1.</span>We offer four Payment Plans with different functionality
					and service level.
				</p>
				<p>
					<span className={styles.documentNumber}>11.3.2.</span>Payment Plan{' '}
					<span className={styles.documentBold}>“Light”</span> includes following features:
					<ul>
						<li>
							<span className={styles.documentAbc}>(a)</span>Manual Bank Account Information;
						</li>
						<li>
							<span className={styles.documentAbc}>(b)</span>No Instant Rent Payment Tool Available;
						</li>
						<li>
							<span className={styles.documentAbc}>(c)</span>Manual Reconciliation
						</li>
						<li>
							<span className={styles.documentAbc}>(d)</span>Real-Time Dashboard
						</li>
						<li>
							<span className={styles.documentAbc}>(e)</span>Transaction History.
						</li>
					</ul>
				</p>
				<p>
					<span className={styles.documentNumber}>11.3.3.</span>Payment Plan{' '}
					<span className={styles.documentBold}>“Smart”</span> includes following features:
					<ul>
						<li>
							<span className={styles.documentAbc}>(a)</span>Automated Bank Account Information* (*- subject to the
							User’s financial institution provision of such services);
						</li>
						<li>
							<span className={styles.documentAbc}>(b)</span>No Instant Rent Payment Tool Available;
						</li>
						<li>
							<span className={styles.documentAbc}>(c)</span>Automated Reconciliation** (**- subject to the payer’s
							relevant payment reference);
						</li>
						<li>
							<span className={styles.documentAbc}>(d)</span>Real-Time Dashboard
						</li>
						<li>
							<span className={styles.documentAbc}>(e)</span>Transaction History.
						</li>
					</ul>
				</p>
				<p>
					<span className={styles.documentNumber}>11.3.4.</span>Payment Plan{' '}
					<span className={styles.documentBold}>“Advanced”</span> includes following features:
					<ul>
						<li>
							<span className={styles.documentAbc}>(a)</span>Automated Bank Account Information* (*- subject to the
							User’s financial institution provision of such services);
						</li>
						<li>
							<span className={styles.documentAbc}>(b)</span>Instant Rent Payment Tool Available (Up to 15 payments a
							month)*** (***- subject to payer’s financial institution provision of such services);
						</li>
						<li>
							<span className={styles.documentAbc}>(c)</span>Automated Reconciliation** (**- subject to the payer’s
							relevant payment reference or payer’s use of the payment link created from the RentWallet);
						</li>
						<li>
							<span className={styles.documentAbc}>(d)</span>Real-Time Dashboard
						</li>
						<li>
							<span className={styles.documentAbc}>(e)</span>Transaction History;
						</li>
					</ul>
				</p>
				<p>
					<span className={styles.documentNumber}>11.3.5.</span>Payment Plan{' '}
					<span className={styles.documentBold}>“Expert”</span> includes following features:
					<ul>
						<li>
							<span className={styles.documentAbc}>(a)</span>Automated Bank Account Information* (*- subject to the
							User’s financial institution provision of such services);
						</li>
						<li>
							<span className={styles.documentAbc}>(b)</span>Instant Rent Payment Tool Available (15+ payments a
							month)*** (***- subject to payer’s financial institution provision of such services);
						</li>
						<li>
							<span className={styles.documentAbc}>(c)</span>Automated Reconciliation** (**- subject to the payer’s
							relevant payment reference or payer’s use of the payment link created from the RentWallet);
						</li>
						<li>
							<span className={styles.documentAbc}>(d)</span>Real-Time Dashboard
						</li>
						<li>
							<span className={styles.documentAbc}>(e)</span>Transaction History.
						</li>
					</ul>
				</p>
				<p>
					<span className={classNames(styles.documentNumber, styles.documentBold)}>11.4. </span>
					<span className={classNames(styles.documentUnderline, styles.documentBold)}>Subscription Term.</span>
				</p>
				<p>
					<span className={styles.documentNumber}>11.4.1.</span>All subscriptions are monthly subscriptions and have to
					be renewed on monthly basis. The subscription term is a calendar month, shall commence on the day the
					subscription fee has been received by us and remain in effect until the expiration of subscription.
				</p>
				<p>
					<span className={styles.documentBold}>Calendar month</span> is a period of time commencing on the day the
					subscription fee has been received by us and ending immediately before the beginning of the corresponding day
					of the next month or, if there is no such corresponding day, ending at the expiration of the next month. For
					example, if your RentWallet Subscription Term begins on the 10th of August then the subscription will expire
					immediately before 00.00 on the 10th of September (or in other words at 24.00 on the 9th of September). In
					case of your RentWallet Subscription Term begins on the 30th or 31st of January then the subscription will
					expire at 24.00 on the last day (28th or 29th) of February.
				</p>
				<p>
					<span className={styles.documentNumber}>11.4.2.</span>We may also offer annual Subscription Term which is a
					calendar year. If you choose to change from a monthly to an annual subscription, the annual Fee rate will take
					effect at the beginning of the next billing date after the current subscription term is expired.
				</p>
				<p>
					<span className={styles.documentBold}>Calendar year</span> is a period of time commencing on the day the
					subscription fee has been received by us and ending immediately before the beginning of the corresponding day
					of the same month of the next year. For example, if your RentWallet Subscription Term begins on the 10th of
					August 2021 then the annual subscription will expire immediately before 00.00 on the 10th of August 2022 (or
					in other words at 24.00 on the 9th of August 2022).
				</p>
				<p>
					<span className={styles.documentNumber}>11.4.3.</span>If you upgrade your subscription or add new categories
					of service to your RentWallet Account, such changes may result in a new billing date effective upon the date
					you elect such upgrade or addition.
				</p>
				<p>
					<span className={styles.documentNumber}>11.4.4.</span>The Subscription Term shall be displayed for each
					subscription in your RentWallet Account as well as indicated in the corresponding invoice.
				</p>
				<p>
					<span className={classNames(styles.documentNumber, styles.documentBold)}>11.5. </span>
					<span className={classNames(styles.documentUnderline, styles.documentBold)}>
						Statutory Cancellation Period.
					</span>
				</p>
				<p>
					<span className={styles.documentNumber}>11.5.1.</span>If you subscribe to Payment Plan, you may change your
					mind for any or no reason and receive a full refund of the Fee paid within fourteen (14) days starting from
					subscription commencement day (Cooling-off Period) in accordance with the following:
					<ul>
						<li>
							(a) If you subscribe to Payment Plan with no Trial extension, you agree that the Cooling-off Period is
							available for fourteen (14) days after the payment has been received by us, but is lost once you use the
							RentWallet Service during that period;
						</li>
						<li>
							(b) If you subscribe to Payment Plan with a Trial extension, you agree that the Cooling-off period for
							Payment Plan for which you are receiving a Trial extension ends at 24.00 on the fourteenth (14th) day
							starting from the day of the start of the Trial extension. If you do not cancel the subscription before
							the Trial extension ends, you lose your right of withdrawal.
						</li>
					</ul>
				</p>
				<p>
					<span className={styles.documentNumber}>11.5.2.</span>We will reimburse this fee back to you via the same
					payment channel within fourteen (14) days from the day we have received your cancellation request in
					accordance with Clause 1.8.
				</p>
				<p>
					<span className={classNames(styles.documentNumber, styles.documentBold)}>11.6. </span>
					<span className={classNames(styles.documentUnderline, styles.documentBold)}>Payments.</span>
				</p>
				<p>
					<span className={styles.documentNumber}>11.6.1.</span>You shall pay subscription Fee by the following methods
					(<span className={styles.documentBold}>Payment Methods</span>):
					<ul>
						<li>
							<span className={styles.documentAbc}>(a)</span>instant payment via open banking;
						</li>
						<li>
							<span className={styles.documentAbc}>(b)</span>debit or credit card;
						</li>
						<li>
							<span className={styles.documentAbc}>(c)</span>bank transfer.
						</li>
					</ul>
				</p>
				<p>
					<span className={styles.documentNumber}>11.6.2.</span>
					<span className={styles.documentBold}>Instant payment via open banking.</span>
				</p>
				<p>
					Instant payment via open banking is a new way for Users to pay for their subscriptions. The funds are
					transferred directly from Users’ bank account to RentWallet bank account. These transactions are fast and
					secure, they do not require putting down card numbers or entry of personal data. No credentials or bank
					account details are disclosed or stored. The payment of subscription Fee is initiated by RentWallet users from
					their mobile banking app or online banking web portal. Funds are transferred immediately using real-time
					banking rails.
				</p>
				<p>
					<span className={styles.documentNumber}>11.6.3.</span>
					<span className={styles.documentBold}>Debit or Credit Cards:</span>
					<ul>
						<li>
							<span className={styles.documentAbc}>(a)</span>We accept any card issued by Visa or Mastercard, including
							prepaid or gift cards that have Visa or Mastercard logo (
							<span className={styles.documentBold}>Payment Card</span>).
						</li>
						<li>
							<span className={styles.documentAbc}>(b)</span>We use Revolut to process card payments.
						</li>
						<li>
							<span className={styles.documentAbc}>(c)</span>If you are paying by Payment Card, you authorise us to
							charge your credit card or bank account for all Fees payable during Subscription Term. You further
							authorise us to use a third party to process such payments and consent to the disclosure of your payment
							information to such third party.
						</li>
						<li>
							<span className={styles.documentAbc}>(d)</span>If you choose to use card payment you confirm that you are
							permitting RentWallet to initiate a payment or series of payments on your behalf in accordance with the
							Payment Plan and Subscription Term. You confirm that we may either take payments as one-off or on
							recurring basis.
						</li>
						<li>
							<span className={styles.documentAbc}>(e)</span>You shall replace the information for any card that expires
							with information for a valid one. If your card is automatically replaced with the new card by your payment
							institution, you acknowledge and agree that we are authorised to deduct any charges on your account
							against new card.
						</li>
						<li>
							<span className={styles.documentAbc}>(f)</span>Anyone using a card represents and warrants that they are
							authorised to use that card, and that any and all charges may be billed to that card and will not be
							rejected.
						</li>
						<li>
							<span className={styles.documentAbc}>(g)</span>If we are unable to process your card for any reason, we
							shall try to contact you by email and may suspend the access to your account until payment has been
							received.
						</li>
					</ul>
				</p>
				<p>
					<span className={styles.documentNumber}>11.6.4.</span>
					<span className={styles.documentBold}>Payment by bank transfer:</span>
					<ul>
						<li>
							<span className={styles.documentAbc}>(a)</span>Payment by bank transfer is possible against
							invoice-proforma. We shall send you invoice-proforma to the email address registered with RentWallet
							within one day from the date of subscription to Payment Plan and choice of payment by bank transfer.
							Invoice-proforma shall specify all subscription information (Amount, Payment Plan, Order reference, etc.).
						</li>
						<li>
							<span className={styles.documentAbc}>(b)</span>Invoiced amount is due immediately on receipt and payable
							within seven (7) days from the date of the invoice-proforma, unless otherwise specified.
						</li>
						<li>
							<span className={styles.documentAbc}>(c)</span>If subscription Fee has not been received by us within
							seven (7) days from the date of invoice-proforma, your request for subscription shall become void. You
							will need to initiate new subscription request should you wish to subscribe again.
						</li>
						<li>
							<span className={styles.documentAbc}>(d)</span>The subscription will take effect only after the
							subscription Fee has been received by us.
						</li>
						<li>
							<span className={styles.documentAbc}>(e)</span>Upon receipt of the payment we will confirm the
							subscription and commercial invoice will be issued and sent to the email address registered with
							RentWallet.
						</li>
					</ul>
				</p>
				<p>
					<span className={classNames(styles.documentNumber, styles.documentBold)}>11.7. </span>
					<span className={classNames(styles.documentUnderline, styles.documentBold)}>Refund and Taxes.</span>
				</p>
				<p>
					<span className={styles.documentNumber}>11.7.1.</span>Except for your termination rights under Clause 16, if
					you elect to terminate your RentWallet subscription or cancel your RentWallet account prior to the end of the
					current Subscription Term, no refunds or credits for Fees or other charges or payments will be provided to
					you.
				</p>
				<p>
					<span className={styles.documentNumber}>11.7.2.</span>All payment obligations are non-cancelable and all
					amounts paid are non-refundable. All Fees are due and payable in advance throughout Subscription Term.
				</p>
				<p>
					<span className={styles.documentNumber}>11.7.3.</span>Given the nature of the service, we do not offer a
					refund or credit on a paid Fee. We will generally not provide refund in the following situations:
					<ul>
						<li>
							<span className={styles.documentAbc}>(a)</span>You have changed your mind about the Service;
						</li>
						<li>
							<span className={styles.documentAbc}>(b)</span>You do not need to use the Service anymore;
						</li>
						<li>
							<span className={styles.documentAbc}>(c)</span>You paid the Fee by mistake;
						</li>
						<li>
							<span className={styles.documentAbc}>(d)</span>You do not have sufficient expertise to use the Service;
						</li>
						<li>
							<span className={styles.documentAbc}>(e)</span>You ask for good will;
						</li>
						<li>
							<span className={styles.documentAbc}>(f)</span>You forgot to cancel auto-renewal of the Service;
						</li>
						<li>
							<span className={styles.documentAbc}>(g)</span>The Service does not meet your expectations.
						</li>
					</ul>
				</p>
				<p>
					<span className={styles.documentNumber}>11.7.4.</span>The list is not exhaustive and shall not be construed so
					as to limit our right to decline refund requests in other situations.
				</p>
				<p>
					<span className={styles.documentNumber}>11.7.5.</span>All Fees are inclusive of applicable current UK VAT rate
					chargeable in the UK at the time of Subscription. Any other similar or equivalent transactional tax or
					imposition is not included and you are liable for it where applicable.
				</p>
			</div>

			{/* 12. Connected Accounts */}
			<div className={styles.documentSection}>
				<h4>
					<span className={styles.documentNumber}>12.</span>Connected Accounts
				</h4>
				<p className={styles.documentItalic}>
					This section explains the basis on which you allow the Service to connect to your accounts with other service
					providers, and that the information on those accounts is not our responsibility.
				</p>
				<p>
					<span className={styles.documentNumber}>12.1.</span>In some areas of the Service, you have the ability to
					connect to your bank accounts and other accounts you hold with third parties (
					<span className={styles.documentBold}>“Third Party Accounts”</span>). This enables us to access and retrieve
					data from your Third Party Accounts into the Service.
				</p>
				<p>
					<span className={styles.documentNumber}>12.2.</span>By using the Service to connect to Third Party Accounts,
					you authorise us and the relevant third party (on an ongoing basis unless and until you deactivate the
					connection) to access the relevant third party source, on your behalf and as your agent, to retrieve
					information requested by you or otherwise available from the Third Party Account. You agree that the third
					parties shall be entitled to rely on the foregoing authorisation and that this does not mean that the Service
					is endorsed or sponsored by any of them.
				</p>
				<p>
					<span className={styles.documentNumber}>12.3.</span>RentWallet cannot be responsible for the accuracy of data
					it receives from the Third Party Accounts or third parties and you must ensure that it is (and continues to
					be) accurate. If at any time you choose not to link to a Third Party Account or third party you will stop
					receiving information from that Third Party Account or third party which may affect elements of the Service.
					RentWallet cannot be responsible for any inaccuracies caused by you no longer having access to data or by data
					not being up-to-date.
				</p>
			</div>

			{/* 13. Disclaimer of Warranties */}
			<div className={styles.documentSection}>
				<h4>
					<span className={styles.documentNumber}>13.</span>Disclaimer of Warranties
				</h4>
				<p className={styles.documentItalic}>
					The information on the Service comes from third parties so we cannot make any promises about it, or that there
					will not be interruptions to other service providers’ systems, which we do not control.
				</p>
				<p>
					<span className={styles.documentNumber}>13.1.</span>You acknowledge and agree that your use of the Service and
					all the Content included in or accessible from the Service is provided on an “as is” and “as available” basis.
					To the fullest extent permissible by law, we and Third Party Service Providers disclaim all statutory or
					implied warranties, representations and conditions including but not limited those as to quality,
					merchantability, fitness for purpose and non-infringement.
				</p>
				<p>
					<span className={styles.documentNumber}>13.2.</span>We do not guarantee, warrant or represent that:
					<ul>
						<li>
							<span className={styles.documentAbc}>(a)</span>the Content is complete, accurate, up-to-date or
							error-free;
						</li>
						<li>
							<span className={styles.documentAbc}>(b)</span>the Service is virus-free or that its operation will be
							continuous, uninterrupted or error-free.
						</li>
					</ul>
				</p>
				<p>
					<span className={styles.documentNumber}>13.3.</span>You acknowledge and agree that the Content:
					<ul>
						<li>
							<span className={styles.documentAbc}>(a)</span>cannot be relied upon by you or any third party as a
							guarantee of any particular result;
						</li>
						<li>
							<span className={styles.documentAbc}>(b)</span>does not constitute any form of advice, recommendation or
							endorsement by us;
						</li>
						<li>
							<span className={styles.documentAbc}>(c)</span>is not intended by us to be relied upon by anyone as the
							basis for making (or refraining from making) any specific decision; and
						</li>
						<li>
							<span className={styles.documentAbc}>(d)</span>is used at your own discretion.
						</li>
					</ul>
				</p>
			</div>

			{/* 14. Limitation of Liability */}
			<div className={styles.documentSection}>
				<h4>
					<span className={styles.documentNumber}>14.</span>Limitation of Liability
				</h4>
				<p className={styles.documentItalic}>
					This section explains who is responsible or liable if various things go wrong, and the limits that apply in
					those cases.
				</p>
				<p>
					<span className={styles.documentNumber}>14.1.</span>This Clause sets out our entire financial liability
					(including any liability for the acts or omissions of our employees, agents and subcontractors) to you under
					or in connection with this Agreement; any use made by you of the Service or any part of it; and any
					representation, statement or tortious act or omission (including negligence) arising under or in connection
					with this Agreement.
				</p>
				<p>
					<span className={styles.documentNumber}>14.2.</span>Nothing in this Agreement limits or excludes our liability
					for death or personal injury caused by our negligence, for fraud or fraudulent misrepresentation or any other
					liability we cannot legally limit.
				</p>
				<p>
					<span className={styles.documentNumber}>14.3.</span>Each party shall only be liable for its own breach of
					contract, negligence or willful misconduct.
				</p>
				<p>
					<span className={styles.documentNumber}>14.4.</span>Our liability in case of an unauthorised Payment
					Transaction or a Payment Transaction that was incorrectly executed due to an error by us or Moneyhub is
					governed by the provisions of Clause 13 of the Moneyhub Terms of Use located at{' '}
					<a href="https://content.moneyhub.co.uk/terms/api-terms-v1.pdf" target={'_blank'} rel="noreferrer">
						https://content.moneyhub.co.uk/terms/api-terms-v1.pdf
					</a>
					.
				</p>
				<p>
					<span className={styles.documentNumber}>14.5.</span>You acknowledge and accept that:
					<ul>
						<li>
							<span className={styles.documentAbc}>(a)</span>the Service is subject to any constraints or limitations
							stipulated by any regulatory authority or applicable law and our continued authorisation by the competent
							regulatory authorities; and
						</li>
						<li>
							<span className={styles.documentAbc}>(b)</span>our ability to provide the Service depends on the continued
							provision of essential components provided by Third Party Service Providers including but not limited to
							providers of processing and other services, over which we have no control.
						</li>
					</ul>
				</p>
				<p>
					<span className={styles.documentNumber}>14.6.</span>By facilitating the initiation of payment orders we shall
					not be deemed to have assumed any liability that you may have incurred in relation to the relevant Payment
					Transaction or the purpose for which it is made. We shall not be responsible for the safety, legality, quality
					or any other aspect of any transactions or goods and services for which you might be using the Service to
					disburse the proceeds of or otherwise pay or receive funds for.
				</p>
				<p>
					<span className={styles.documentNumber}>14.7.</span>Notwithstanding anything else contained in this Agreement
					(except Clause 14.2), neither party shall be liable to the other for any loss of profits, opportunity,
					business, reputation, data, goodwill or contracts or for any indirect or consequential loss or damage whether
					arising from negligence, breach of contract or any other cause of action arising out of the subject matter of
					this Agreement.
				</p>
				<p>
					<span className={styles.documentNumber}>14.8.</span>Save as provided for in Clause 14.2, our total liability
					in any period of 12 months for any damages and/or loss suffered by you under this Agreement shall not exceed a
					sum equal to the amounts paid in Fees by you in the 12 months (or any shorter time period if 12 months has not
					elapsed) preceding the date on which the cause of action arose.
				</p>
				<p>
					<span className={styles.documentNumber}>14.9.</span>All warranties, conditions and other terms implied by
					statute or common law are, to the fullest extent permitted by law, excluded from this Agreement. In
					particular, and except as expressly stated in this Agreement, we do not:
					<ul>
						<li>
							<span className={styles.documentAbc}>(a)</span>make any representations or warranties, express or implied,
							with respect to merchantability, fitness for a particular purpose or non-infringement;
						</li>
						<li>
							<span className={styles.documentAbc}>(b)</span>warrant, represent, undertake or guarantee that you will
							achieve any level of sales, revenue or profit;
						</li>
						<li>
							<span className={styles.documentAbc}>(c)</span>warrant, represent, undertake or guarantee that the Service
							will always be available or operate error-free, or that any errors, omissions or misplacements in any
							software will be corrected.
						</li>
					</ul>
				</p>
				<p>
					<span className={styles.documentNumber}>14.10.</span>Neither party shall be liable for any failure or delay in
					performance of its obligations under this Agreement for causes beyond its reasonable control. The party
					wishing to claim relief by reason of any such circumstance shall notify the other party in writing without
					delay on the intervention and on the cessation thereof.
				</p>
				<span className={styles.documentNumber}>14.11.</span>You are solely and exclusively responsible for any results
				obtained from your use of the Service, and for conclusions drawn from such use. We shall have no liability for
				any damage caused by errors or omissions in any Content, or instructions or scripts provided to us by you or by
				any third party in connection with the Service.
			</div>

			{/* 15. Indemnification */}
			<div className={styles.documentSection}>
				<h4>
					<span className={styles.documentNumber}>15.</span>Indemnification
				</h4>
				<p className={styles.documentItalic}>
					This section says you are liable if others make claims against us because you have done something you should
					not have done or omitted to do.
				</p>
				<p>
					You agree to indemnify us against any and all claims, losses, liabilities, damages, expenses and costs
					(including legal fees and expenses) arising out of or in connection with your use of the Service or conduct in
					relation to it in breach of this Agreement, your User Content or infringement of third party rights, except to
					the extent that we have breached this Agreement or been negligent.
				</p>
			</div>

			{/* 16. Term and Termination */}
			<div className={styles.documentSection}>
				<h4>
					<span className={styles.documentNumber}>16.</span>Term and Termination
				</h4>
				<p className={styles.documentItalic}>
					This section explains who can put an end to the Agreement when and for what reasons; what happens then; and
					which terms continue to apply after the Agreement ends.
				</p>
				<p>
					<span className={styles.documentNumber}>16.1</span>You may terminate the Agreement by notifying us not later
					than 1 (one) month in advance.
				</p>
				<p>
					<span className={styles.documentNumber}>16.2</span>We may terminate the Agreement by notifying you not later
					than 2 (two) months in advance.
				</p>
				<p>
					<span className={styles.documentNumber}>16.3</span>Either party may terminate this Agreement immediately if
					the other party:
					<ul>
						<li>
							<span className={styles.documentAbc}>(a)</span>becomes unable to pay its debts (within the meaning of
							section 123 of the Insolvency Act 1986), admits its inability to pay its debts or otherwise becomes
							insolvent;
						</li>
						<li>
							<span className={styles.documentAbc}>(b)</span>has any distraint, execution, attachment, sequestration or
							similar action taken, levied or enforced against itself or any of its substantial assets, or if any
							garnishee order is issued or served on the party;
						</li>
						<li>
							<span className={styles.documentAbc}>(c)</span>becomes the subject of any petition presented, order made
							or resolution passed for the liquidation, administration, bankruptcy or dissolution of all or a
							substantial part of the party’s business, except where solvent amalgamation or reconstruction is proposed
							on terms previously approved by the non-terminating party;
						</li>
						<li>
							<span className={styles.documentAbc}>(d)</span>loses full and unrestricted control over all or part of its
							assets because of the appointment of an administrative or other receiver, manager, trustee, liquidator,
							administrator or similar person or officer; or
						</li>
						<li>
							<span className={styles.documentAbc}>(e)</span>enters into or proposes any composition or arrangement
							concerning its debts with its creditors (or any class of its creditors).
						</li>
					</ul>
				</p>
				<p>
					<span className={styles.documentNumber}>16.4</span>We may terminate this Agreement immediately on written
					notice to the Customer if:
					<ul>
						<li>
							<span className={styles.documentAbc}>(a)</span>we suspect you or a person related to you of money
							laundering or terrorist financing;
						</li>
						<li>
							<span className={styles.documentAbc}>(b)</span>you have breached any of the provisions of Clause 3.12
							(concerning the accuracy of data you provide to us); or
						</li>
						<li>
							<span className={styles.documentAbc}>(c)</span>termination of the Agreement is demanded by a regulatory
							authority (e.g. the Financial Conduct Authority) or another governmental authority.
						</li>
					</ul>
				</p>
				<p>
					<span className={styles.documentNumber}>16.5</span>Termination of this Agreement shall not prejudice either of
					the parties' rights and remedies which have accrued as at termination.
				</p>
				<p>
					<span className={styles.documentNumber}>16.6</span>Upon termination of the Agreement, you shall immediately
					pay to us all amounts owed by you under the Agreement and we shall immediately pay you all amounts owed to you
					under the Agreement. We shall be entitled to set-off amounts owed by us to you against amounts owed by you to
					us.
				</p>
				<p>
					<span className={styles.documentNumber}>16.7</span>Clauses 1, 2, 3.19, 4.5, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
					15, 16.5, 16.6, 18, 19, 20, 21 shall survive termination of this Agreement.
				</p>
			</div>

			{/* 17. Variations to this Agreement */}
			<div className={styles.documentSection}>
				<h4>
					<span className={styles.documentNumber}>17.</span>Variations to this Agreement
				</h4>
				<p className={styles.documentItalic}>This section explains how and why we can make changes to the terms.</p>
				<p>
					<span className={styles.documentNumber}>17.1</span>Subject to Clauses 17.2 and 17.3, we may periodically make
					changes to this Agreement and shall notify you by posting a revised version of the Agreement on the Site and
					emailing you at your email address registered with us. The revised terms including the changes will take
					effect two (2) months following such notice. You will be deemed to have accepted the changes if you do not
					notify us before the proposed date that the changes take effect that the changes are not accepted and you
					continue using the Service. If you reject the changes, you can immediately terminate this Agreement in
					accordance with Clause 16.1 free of charge and with effect at any time until the date when the changes would
					have applied (subject to Clause 16.6).
				</p>
				<p>
					<span className={styles.documentNumber}>17.2</span>We will only make changes:
					<ul>
						<li>
							<span className={styles.documentAbc}>(a)</span>where we consider that a change will make this Agreement
							clearer and no less favourable to you; or
						</li>
						<li>
							<span className={styles.documentAbc}>(b)</span>to reflect new, or changes to existing, systems,
							technology, products, services or business processes; or
						</li>
						<li>
							<span className={styles.documentAbc}>(c)</span>to help meet the cost of changes in our funding or working
							capital requirements; or
						</li>
						<li>
							<span className={styles.documentAbc}>(d)</span>to implement changes required by applicable law, industry
							codes of practice or decisions of any court, arbitrator or the Financial Ombudsman Service.
						</li>
					</ul>
				</p>
				<p>
					<span className={styles.documentNumber}>17.3</span>You agree that, where applicable, changes in exchange rates
					may be applied immediately and without notice, provided that the change in the rates are based on the
					Reference Exchange Rate, except that changes in rates which are more favourable to you, may be applied without
					notice. Changes in exchange rate used by us in Payment Transactions shall be implemented and calculated in a
					neutral manner that does not discriminate against you.
				</p>
			</div>

			{/* 18. Notices */}
			<div className={styles.documentSection}>
				<h4>
					<span className={styles.documentNumber}>18.</span>Notices
				</h4>
				<p className={styles.documentItalic}>
					This section explains how and where you can write to us; and where we can write to you – including where the
					terms require “notice” or communication in writing.
				</p>
				<p>
					<span className={styles.documentNumber}>18.1.</span>Notices served under this Agreement shall be in writing
					and may be sent by email or by post. The preferred method of communication is email.
				</p>
				<p>
					<span className={styles.documentNumber}>18.2.</span>Notices shall be sent to:
					<ul>
						<li>
							<span className={styles.documentAbc}>(a)</span>In the case of RentWallet, in writing to:
							<ul>
								<li>Rentwallet.net Limited</li>
								<li>Lygon House, 50 London Road,</li>
								<li>Bromley, Kent, BR1 3RA</li>
								<li>
									Email: <a href={`mailto: ${socialLinks.Email}`}>{socialLinks.Email}</a>
								</li>
							</ul>
						</li>
						<li>
							<span className={styles.documentAbc}>(b)</span>in your case, in writing to the address or email address
							provided to us on registration, as updated by you from time to time.
						</li>
					</ul>
				</p>
				<p>
					<span className={styles.documentNumber}>18.3.</span>The parties shall notify each other of any change in their
					contact details for notices as set out in this Clause.
				</p>
				<p>
					<span className={styles.documentNumber}>18.4.</span>Notices sent by post will be deemed to have been received
					upon the expiration of three (3) Business Days after posting, if sent from within the UK. Emails will be
					deemed to have been received one hour after being sent or, if this falls after close of business, at 9.00 a.m.
					on the following working day provided that an undeliverable message has not been generated by then.
				</p>
			</div>

			{/* 19. Complaints */}
			<div className={styles.documentSection}>
				<h4>
					<span className={styles.documentNumber}>19.</span>Complaints
				</h4>
				<p className={styles.documentItalic}>
					This section explains how to complain about us, Moneyhub or the Service. If the complaint is about the access
					to payment accounts or requesting payments and you are still not satisfied after going through the process,
					your complaint could go to the “Financial Ombudsman Service”, which is the official complaints handling
					service for payment issues.
				</p>
				<p>
					<span className={styles.documentNumber}>19.1</span>Any complaints about us, Moneyhub or the Service must be
					addressed to us in the first instance by contacting {socialLinks.Email}. We will make every possible effort to
					reply, addressing all points raised, within an adequate timeframe and at the latest within fifteen (15)
					Business Days of receipt of the complaint, in a durable medium. In exceptional situations, if the answer
					cannot be given within fifteen (15) Business Days for reasons beyond our control, we shall send a holding
					reply, clearly indicating the reasons for a delay and specifying the deadline by which you will receive the
					final reply, which shall not exceed thirty five (35) Business Days. For the purpose of this Clause “durable
					medium” means a form which enables you to store the information in a way that is accessible for future
					reference for a period of time adequate for the purposes of the information and which allows the unchanged
					reproduction of the information stored.
				</p>
				<p>
					<span className={styles.documentNumber}>19.2</span>If the complaint relates to the Payment Services, it may
					ultimately be referred to the Financial Ombudsman Service, details of which can be found at
					www.financial-ombudsman.org.uk and who can be contacted at The Financial Ombudsman Service, Exchange Tower,
					Harbour Exchange Square, London E14 9SR, United Kingdom.
				</p>
			</div>

			{/* 20. General Terms */}
			<div className={styles.documentSection}>
				<h4>
					<span className={styles.documentNumber}>20.</span>General Terms
				</h4>
				<p className={styles.documentItalic}>
					This section explains that the Agreements covers the whole relationship between you and us. Any term that the
					courts remove will not affect the rest of the Agreement. Just because you or we do not take any action, that
					we could have taken, does not mean we will not do so next time the same thing happens. We are not in business
					together and we are not your employer. Moneyhub can also rely on the terms, because it is involved in the
					supply of the Payment Services.
				</p>
				<p>
					<span className={styles.documentNumber}>20.1</span>These Terms comprise the entire agreement between you and
					us for the provision of the Service and supersede all prior or contemporaneous negotiations, discussions,
					representations or agreements, whether written or oral. No undertakings, promises, representations, or
					warranties shall have any legal effect unless expressly set out in this Agreement.
				</p>
				<p>
					<span className={styles.documentNumber}>20.2</span>If any provision of this Agreement is held by a court of
					competent jurisdiction to be invalid or unenforceable, the other provisions shall remain in force. The invalid
					or unenforceable provision shall apply with whatever modification is necessary to give effect to the
					commercial intention of the parties.
				</p>
				<p>
					<span className={styles.documentNumber}>20.3</span>Nothing in this Agreement shall give rise to any joint
					venture, partnership, or employment relationship between you and us. Where we act as your agent, we shall only
					do so to the limited extent specified on the contractual basis of this Agreement and not as your general agent
					or fiduciary.
				</p>
				<p>
					<span className={styles.documentNumber}>20.4</span>Nothing in this Agreement is intended to confer a benefit
					on any person who is not a party, and no such person shall have any right under the Contracts (Rights of Third
					Parties) Act 1999 to enforce any terms of this Agreement, provided that this Clause does not affect a right or
					remedy of a third party which exists or is available apart from that Act.
				</p>
				<p>
					<span className={styles.documentNumber}>20.5</span>No failure or delay by a party to exercise any right or
					remedy provided under this Agreement or by law shall constitute a waiver of that or any other right or remedy,
					nor shall it prevent or restrict the further exercise of that or any other right or remedy. No single or
					partial exercise of such right or remedy shall prevent or restrict the further exercise of that or any other
					right or remedy.
				</p>
			</div>

			{/* 21. Jurisdiction and applicable law */}
			<div className={styles.documentSection}>
				<h4>
					<span className={styles.documentNumber}>21.</span>Jurisdiction and applicable law
				</h4>
				<p className={styles.documentItalic}>
					This section explains that the laws of England and Wales apply to the Agreement, and disputes or claims about
					the Agreement can be heard in the country where you live (complaints about the services can be referred to the
					ombudsman under Clause 19).
				</p>
				<p>
					<span className={styles.documentNumber}>21.1</span>This Agreement shall be governed by and construed in
					accordance with the law of England and Wales.
				</p>
				<p>
					<span className={styles.documentNumber}>21.2</span>The English courts will have non-exclusive jurisdiction
					over any claim arising from, or related to, use of our Service although we retain the right to bring
					proceedings against you for breach of these conditions in your country of residence or any other relevant
					country, and you have the right to ask for proceeding to be heard in the courts of Northern Ireland or
					Scotland if you live there.
				</p>
			</div>

			<div>
				<a href="/ServiceTerms.pdf" download>
					Download RentWallet Service Terms
				</a>
			</div>
		</div>
	)
}

export default Terms
