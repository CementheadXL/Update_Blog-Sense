import React, { useState } from 'react';
import { BlogPost } from '../types';
import { Calendar, Clock, Tag, ArrowLeft, Video } from 'lucide-react';

// Full content data based on provided HTML
const POSTS: BlogPost[] = [
  {
    id: 'computer-to-ai',
    title: 'From the $2,000 Computer to AI in Philanthropy',
    excerpt: 'From a $2,000 computer in the 90s to AI in philanthropy today — why we must have a seat at the table when AI policies are written.',
    date: 'Feb 2025',
    category: 'AI Strategy',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop',
    content: (
      <div>
        <div className="mb-6 p-4 bg-gray-100 rounded-lg text-center italic text-gray-600">
           <Video className="inline-block mr-2 h-5 w-5" /> 
           Video content available on mobile/desktop version.
        </div>

        <p className="mb-4">When new technology arrives, people are skeptical—until it catches on. Then suddenly, everyone freaks out.</p>
        <p className="mb-4">I learned this lesson young. Back in the late 90s, I was a high schooler begging my mom to buy me a computer. It wasn’t cheap—$2,000 we really didn’t have. My mom was a single parent raising two kids while working road construction. Yes, road construction! My excuse was that the computer would help me get better grades. What I really knew was that it would give me access to something bigger.</p>
        <p className="mb-4">At first, computers were just for email, word processing, and spreadsheets—nothing a 17-year-old dreams about learning, but I did it anyway. Because I could see where it was headed. Through the dot-com bust, the rise of piracy, and all the growing pains of the 2000s, the internet became the backbone of everything we do. Today, it’s not a luxury—it’s a necessity.</p>
        <p className="mb-4 font-semibold">Fast-forward to 2025, and here we are again. This time, it’s Artificial Intelligence.</p>

        <h3 className="text-xl font-bold mt-8 mb-4 font-serif text-primary">From Early Experiments to Daily Life</h3>
        <p className="mb-4">AI isn’t new—the field traces back to a 1956 workshop at Dartmouth College where the goal was to create machines that could reason, learn, and solve problems like humans. What you’ve probably heard about most recently are “LLMs,” or Large Language Models. These systems are highly specialized at understanding, generating, and responding to human language.</p>
        <p className="mb-4">The turning point came with the release of OpenAI’s ChatGPT. In just three years, usage has soared, with estimates of 122 to 190 million people engaging daily. And PwC projects AI could add up to $15.7 trillion to the global economy by 2030. Like the internet before it, AI is no longer optional—it’s foundational.</p>

        <h3 className="text-xl font-bold mt-8 mb-4 font-serif text-primary">Why This Matters for Philanthropy</h3>
        <p className="mb-4">For philanthropy, AI is not just an IT issue. It’s an organizational strategy.</p>
        <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
          <li><strong>Donor Trust at Stake.</strong> We live by the Donor Bill of Rights. A policy created without us could inadvertently violate privacy or erode confidence.</li>
          <li><strong>Data Security Risks.</strong> Staff are already experimenting with AI. Without clear guidelines, confidential donor information—giving histories, contact details, personal notes—could be exposed.</li>
          <li><strong>Bias in Fundraising.</strong> AI models can amplify inequities buried in data. Only philanthropy professionals can catch and correct these risks before they harm relationships.</li>
        </ul>
        <p className="mb-4">The reality is: <strong>our teams are already using AI.</strong> Pretending otherwise is counterproductive. What we need are guardrails, not gatekeeping. A practical “Acceptable Use Policy” can keep us safe while letting us innovate responsibly.</p>

        <h3 className="text-xl font-bold mt-8 mb-4 font-serif text-primary">Practical Guidance: Do’s and Don’ts</h3>
        <div className="overflow-x-auto mb-8 rounded-xl border border-gray-200 shadow-sm">
          <table className="min-w-full bg-white">
            <thead className="bg-slate-50">
              <tr>
                <th className="py-3 px-6 border-b text-left font-bold text-primary">Task</th>
                <th className="py-3 px-6 border-b text-left font-bold text-green-700">Safe Use of AI (DO)</th>
                <th className="py-3 px-6 border-b text-left font-bold text-red-700">Unsafe Use of AI (DO NOT)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-4 px-6 text-sm font-medium">Drafting a Donor Email</td>
                <td className="py-4 px-6 text-sm">Use AI to draft stewardship language using only public project info</td>
                <td className="py-4 px-6 text-sm bg-red-50/30">Paste donor’s contact info, giving history, or personal details into a public AI tool</td>
              </tr>
              <tr className="border-b bg-gray-50/50">
                <td className="py-4 px-6 text-sm font-medium">Creating a Gift Agreement</td>
                <td className="py-4 px-6 text-sm">Use AI to generate a template based on standard language</td>
                <td className="py-4 px-6 text-sm bg-red-50/30">Enter a donor’s private financial details into the AI</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 text-sm font-medium">Analyzing Donor Data</td>
                <td className="py-4 px-6 text-sm">Use a secure, contracted AI tool within the museum’s database</td>
                <td className="py-4 px-6 text-sm bg-red-50/30">Upload donor lists to an unvetted external platform</td>
              </tr>
              <tr className="bg-gray-50/50">
                <td className="py-4 px-6 text-sm font-medium">Summarizing Information</td>
                <td className="py-4 px-6 text-sm">Paste a public news article into AI for a summary</td>
                <td className="py-4 px-6 text-sm bg-red-50/30">Upload internal contact reports or confidential documents</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold mt-8 mb-4 font-serif text-primary">The Crossroads Ahead</h3>
        <p className="mb-4">AI won’t replace the empathy, nuance, and strategic judgment that philanthropy requires. But it can amplify our impact—if it’s used thoughtfully.</p>
        <p className="mb-4">Just as my teenage gamble on a $2,000 computer changed my world, AI is about to reshape ours. The question isn’t whether nonprofits will use AI, but whether we’ll use it responsibly. And that responsibility starts with ensuring philanthropy has a seat at the table.</p>
        <p className="font-bold text-lg text-primary mt-6 mb-8 border-l-4 border-accent pl-4">Innovation without trust is a risk we can’t afford.</p>
      </div>
    )
  },
  {
    id: 'ai-all-sizes',
    title: 'AI for All Sizes in Nonprofits',
    excerpt: 'Whether you\'re hosting a neighborhood ice cream social for 20 or orchestrating a gala, the size of your nonprofit event doesn\'t limit the value of the data you can collect.',
    date: 'Jan 2025',
    category: 'Pipeline',
    readTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop',
    content: (
      <div>
        <p className="mb-4">Whether you're hosting a neighborhood ice cream social for 20 or orchestrating a gala with over 300 guests, the size of your nonprofit event doesn't limit the value of the data you can collect. As a prospect researcher, I’ve seen firsthand how even the smallest engagement can uncover powerful donor insights when supported by the right tools.</p>
        
        <h3 className="text-xl font-bold mt-8 mb-4 font-serif text-primary">A Real-World Example: Ice Cream Social Insights</h3>
        <p className="mb-4">Back when I served as an AmeriCorps VISTA, I hosted a simple ice cream social—an event with no more than 20 people. We used a basic attendee sign-in sheet and sent out a post-event survey afterward. That modest step ended up making a major difference. We were able to show real engagement and gather feedback that directly supported new, sustainable funding. Because we captured the data and showed the impact, the event received funding again the following year. Small event, big result.</p>
        
        <h3 className="text-xl font-bold mt-8 mb-4 font-serif text-primary">Why Event Data Matters</h3>
        <p className="mb-4">Every RSVP, name tag, attendee form, and survey response is a building block. Prospect researchers thrive when we have access to consistent, well-structured data from events. By tracking who shows up, and how often, we start to surface patterns that reveal hidden capacity, philanthropic interests, and paths to deeper engagement. Some think of only tracking quantitative data, but qualitative data can be as important. Follow up after an event and invite feedback—it encourages future involvement.</p>
        
        <h3 className="text-xl font-bold mt-8 mb-4 font-serif text-primary">AI Helps, No Matter Your Size</h3>
        <p className="mb-4">AI is not just for big budgets or large development teams. With today’s tools, small to mid-sized nonprofits can use AI to analyze event data, tag attendee behavior in CRMs, and even predict which guests are likely to become major donors. It doesn’t replace our instincts or judgment. It sharpens them.</p>
        <p className="mb-4">Even if you don’t have access to a computer or spreadsheet, take a picture of your sign-in sheet. Your phone can turn that image into usable text. That’s only the start—explore and stay curious!</p>
        
        <h3 className="text-xl font-bold mt-8 mb-4 font-serif text-primary">Start Here — Three Ways to Use AI Now</h3>
        <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
          <li><strong>E-Newsletters:</strong> personalize, summarize, and better engage your audience.</li>
          <li><strong>Data Collection:</strong> gather key details like name, employer, email, mission connection, and volunteer interest.</li>
          <li><strong>Relationship Building:</strong> identify meaningful connections and deepen them—without losing the human touch.</li>
        </ul>
        
        <h3 className="text-xl font-bold mt-8 mb-4 font-serif text-primary">From Transactional to Transformational</h3>
        <p className="mb-4">I’ve uncovered corporate executives from $15 donations—simply because they attended multiple events, filled out a survey, or clicked on a newsletter link. When you connect those dots with the help of AI, you shift from reactive stewardship to proactive relationship-building.</p>

        <h3 className="text-xl font-bold mt-8 mb-4 font-serif text-primary">Final Thoughts</h3>
        <p className="mb-4">AI is for all sizes in nonprofit work. Whether you’re running a pop-up donor event or an annual gala, every bit of data counts. And with the right structure in place, AI can help you uncover the stories behind the stats.</p>
      </div>
    )
  },
  {
    id: 'human-equation',
    title: 'The Human Equation: Navigating AI\'s Impact',
    excerpt: 'Lately, I’ve been joking that AI is my favorite coworker. There’s something refreshing about collaborating with a tool that doesn’t push back.',
    date: 'Dec 2024',
    category: 'AI Strategy',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
    content: (
      <div>
        <p className="mb-4">Lately, I’ve been joking that AI is my favorite coworker—but honestly, I kind of mean it. There’s something refreshing about collaborating with a tool that doesn’t push back, doesn’t interrupt, and never needs coffee. When I bring an idea to an AI, it doesn’t argue. It just builds. It says, “Sure, let’s try that,” and offers five ways to make it better. Sometimes it gives me a spark I didn’t even know I needed.</p>
        <p className="mb-4">Now, I’m not saying I’d trade in my real coworkers (well… maybe on Mondays). But AI has quietly reshaped how I work—and it’s starting to shape how we all work together.</p>
        
        <h3 className="text-xl font-bold mt-8 mb-4 font-serif text-primary">Collaboration Without Friction</h3>
        <p className="mb-4">We’ve always known that great collaboration comes from different perspectives. But let’s be honest: real-life brainstorming can sometimes feel like a tug-of-war. Who speaks first? Who disagrees? Whose idea wins?</p>
        <p className="mb-4">AI shifts that energy. It’s like having a teammate who’s always in “yes, and…” mode. It doesn’t care about credit. It doesn’t get tired. And it doesn’t stall progress because it’s worried about how something sounds. This reduction in friction empowers us to be braver in our work, fostering a culture where people aren't afraid to share, try, or rethink.</p>

        <h3 className="text-xl font-bold mt-8 mb-4 font-serif text-primary">The Unseen Architect: Reshaping Our Collective Intuition</h3>
        <p className="mb-4">Beyond just removing friction, AI is subtly influencing our collective intuition and problem-solving approaches. It’s a constant "suggestion box," exposing us to a wider array of possibilities than we might have considered on our own. This isn't just about iterating on ideas; it's about expanding our initial ideation.</p>
        
        <p className="mb-4">AI's prowess in pattern recognition means it often presents solutions or approaches we might not immediately see. This begs the question: are we becoming more effective problem-solvers by leveraging AI, or are we developing a new kind of "pre-solutioning" mindset? The lines between human intuition and AI-driven insight are blurring.</p>

        <h3 className="text-xl font-bold mt-8 mb-4 font-serif text-primary">The Great Monotony Eviction: A New Purpose for Work</h3>
        <p className="mb-4">One of the most profound impacts of AI will be the quiet eviction of monotonous tasks. Imagine an office where the soul-crushing, repetitive work – data entry, scheduling, basic report generation – simply disappears. This isn't just about efficiency; it's about injecting more purpose into everyone's role.</p>
        
        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
            <li><strong>Deep Work:</strong> Diving into complex problem-solving, strategic thinking, and genuine innovation.</li>
            <li><strong>Skill Development:</strong> Acquiring higher-value skills that leverage AI rather than being replaced by it.</li>
            <li><strong>Human Connection:</strong> Investing more deeply in mentorship, team building, and authentic collaboration.</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4 font-serif text-primary">The Rise of the "AI Integrator"</h3>
        <p className="mb-4">In this evolving landscape, a new type of role is emerging: the <strong>AI Integrator</strong>. This individual acts as a bridge between the machine's logic and human needs, interpreting AI's output, understanding its limitations, and translating its capabilities into practical, human-centric solutions. They're not simply operating AI; they're strategizing its deployment to maximize human creativity and empathy.</p>
        
        <p className="font-bold text-lg text-primary mt-6 border-l-4 border-accent pl-4">So yeah, AI is my favorite coworker. Not because it’s perfect, but because it helps me be braver in my work and sees a future where human ingenuity is amplified, not diminished.</p>
      </div>
    )
  },
  {
    id: 'adapting-change',
    title: 'Adapting to Change: Funding Strategies',
    excerpt: 'In today’s shifting philanthropic landscape, traditional funding sources are no longer guaranteed. We must stop reacting and start adapting.',
    date: 'Dec 2024',
    category: 'Pipeline',
    readTime: '7 min read',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    content: (
      <div>
        <p className="mb-4">In today’s shifting philanthropic landscape, it’s clear that traditional funding sources—federal, state, and local—are no longer guaranteed. Many nonprofits are navigating the reality that previously reliable support is shrinking or disappearing altogether.</p>
        <p className="mb-4">While a new bill sitting on the President’s desk offers some temporary relief—avoiding new taxes on endowments and preserving key 501(c)(3) incentives—and while tax considerations for ultra-high-net-worth donors continue to evolve, we can’t afford to wait for legislation to fix what’s changing at the ground level.</p>
        <p className="mb-4">Now is the time for nonprofits to stop focusing solely on the problem and start generating solutions.</p>
        
        <div className="bg-accent/10 p-6 rounded-lg my-6">
            <p className="font-bold text-lg text-primary">And it starts with this question:</p>
            <p className="italic text-gray-700">How well do you know your current relationships—and what data are you using to uncover new ones?</p>
        </div>

        <h3 className="text-xl font-bold mt-8 mb-4 font-serif text-primary">Rethinking Revenue Streams</h3>
        <p className="mb-4">In a time of financial uncertainty, many organizations default to cutting costs or launching urgent appeals. But sustainable change begins by diversifying funding and leveraging what you already have—relationships, data, and mission alignment.</p>
        <p className="mb-4">Segmenting your data can help fundraisers focus on the right prospects at the right time.</p>
        <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
          <li><strong>Donor-Advised Funds (DAFs):</strong> Are you identifying and cultivating donors with DAF capacity?</li>
          <li><strong>Corporate Giving:</strong> Have you mapped your corporate partnerships?</li>
          <li><strong>Individual Foundations:</strong> Are there private foundations whose interests align?</li>
          <li><strong>Engaging the Next Generation:</strong> How are you connecting with emerging philanthropists like Gen Z, who are driven by impact, authenticity, and digital engagement?</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4 font-serif text-primary">Where AI Can Help</h3>
        <p className="mb-4">AI can assist development professionals by:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
          <li>Surfacing undiscovered donor pools through pattern and affinity analysis</li>
          <li>Mapping relationships between your board and corporate leaders</li>
          <li>Segmenting data to focus on the right prospects at the right time</li>
          <li>Identifying trends and preferences of diverse donor groups, including younger generations.</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4 font-serif text-primary">Cultivating a New Generation of Givers: Engaging Gen Z</h3>
        <p className="mb-4">Gen Z is rapidly becoming a significant force in philanthropy, often prioritizing causes that align with their values and seeking tangible impact. To effectively engage Gen Z, consider:</p>
        <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
          <li><strong>Digital-First Engagement:</strong> Meet them where they are – on social media platforms like TikTok, Instagram, and YouTube. Share authentic stories.</li>
          <li><strong>Seamless Giving Experiences:</strong> Ensure your donation process is mobile-friendly. Offer Apple Pay, Google Pay, Venmo.</li>
          <li><strong>Recurring Donations and Micro-Giving:</strong> Promote monthly donation auto-withdrawals, which provide reliable, sustained support.</li>
          <li><strong>Matching Gifts:</strong> Educate them about employer matching gift programs.</li>
          <li><strong>Beyond Financial Contributions:</strong> Offer volunteer opportunities and advocacy roles.</li>
          <li><strong>Transparency and Impact:</strong> Clearly demonstrate how their contributions make a difference.</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4 font-serif text-primary">So, Where Do You Start?</h3>
        <p>Ask yourself:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
          <li>Are your current donors giving below capacity?</li>
          <li>Are you underleveraging your board’s connections?</li>
          <li>Are you spending time with prospects that will never convert?</li>
          <li>Are your engagement strategies optimized to attract and retain younger, digitally-native donors?</li>
        </ul>

        <p className="font-bold mt-6 text-lg">AI won’t replace relationships, but it can reveal blind spots and sharpen your strategy, helping you connect with every generation of givers.</p>
        <p className="italic mt-2">Let’s stop reacting—and start adapting.</p>
      </div>
    )
  },
  {
    id: 'grant-writing',
    title: 'Top 3 Free Grant-Writing Supports',
    excerpt: 'Small nonprofits often lack the budget for dedicated grant staff. Here are three Cleveland-area programs offering expert guidance at no cost.',
    date: 'Nov 2024',
    category: 'Grant Writing',
    readTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop',
    content: (
      <div>
        <p className="mb-4">Small nonprofits often lack the budget and dedicated staff to master grant writing and management—but you don’t have to go it alone. These three Cleveland-area programs offer expert guidance, hands-on feedback, and practical tools at <strong>no cost</strong>, so you can write stronger proposals and steward awards with confidence.</p>
        
        <h3 className="text-xl font-bold mt-8 mb-4 font-serif text-primary">1. Cleveland Public Library</h3>
        <p className="mb-4">CCPL’s dedicated topic page aggregates key grant-writing tools and guides:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
            <li><strong>Foundation Directory Online</strong> — Research tens of thousands of foundations and open RFPs.</li>
            <li><strong>Foundation Directory Essentials</strong> — A streamlined interface to identify potential funders.</li>
            <li><strong>GuideStar (Candid)</strong> — Access IRS Form 990s to vet foundations.</li>
            <li><strong>Sample Proposals & RFPs</strong> — Real-world examples across sectors.</li>
            <li><strong>Grant Writing Guides</strong> — Step-by-step PDF manuals.</li>
        </ul>
        
        <h3 className="text-xl font-bold mt-8 mb-4 font-serif text-primary">2. JumpStart Inc. Grant Writing & Grant Finding Cohort</h3>
        <p className="mb-4">A virtual, cohort-based workshop series tailored for growth-stage nonprofits and small businesses.</p>
        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
            <li><strong>Next Cohort:</strong> Applications typically open in late summer/fall.</li>
            <li><strong>Cost:</strong> Free (limited seats; advance registration required)</li>
            <li><strong>Why It Helps:</strong> Small-group format, peer-learning, and practical exercises.</li>
        </ul>
        
        <h3 className="text-xl font-bold mt-8 mb-4 font-serif text-primary">3. Cuyahoga County Public Library Workshops</h3>
        <p className="mb-4">"How to Write and Win Grants with No Experience" workshops that demystify proposal writing for absolute beginners.</p>
        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
            <li><strong>Cost:</strong> Free with a CCPL library card</li>
            <li><strong>Why It Helps:</strong> No prior experience required, hands-on exercises, and access to digital collections.</li>
        </ul>
        
        <h3 className="text-xl font-bold mt-8 mb-4 font-serif text-primary">From Writing to Winning</h3>
        <p className="mb-4">Now that you’ve found the top free resources to sharpen your proposal skills and learn grant management, you’re well prepared for any grant cycle. But having the chops to write and steward an award is only half the equation—<strong>how do you earn an invitation to actually sit at the table and shape those applications in the first place?</strong></p>
      </div>
    )
  },
  {
    id: 'case-study-florida',
    title: 'Case Study: Seasonal Donor Engagement (Florida)',
    excerpt: 'How an evidence-led outreach program grew a Florida-based cohort of high-potential members from ~100 partial records to 350+ verified contacts.',
    date: 'Aug 2024',
    category: 'Case Study',
    readTime: '8 min read',
    imageUrl: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?q=80&w=2070&auto=format&fit=crop',
    content: (
      <div>
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-8 shadow-sm">
            <h3 className="text-lg font-bold mb-4 text-primary font-serif">Key Results at a Glance</h3>
            <div className="grid grid-cols-3 gap-4 text-center divide-x divide-gray-200">
                <div className="p-2">
                    <div className="text-3xl font-bold text-accent">100 → 350+</div>
                    <div className="text-xs uppercase tracking-wider font-semibold text-gray-500 mt-1">Verified Records</div>
                </div>
                <div className="p-2">
                    <div className="text-3xl font-bold text-accent">4–5</div>
                    <div className="text-xs uppercase tracking-wider font-semibold text-gray-500 mt-1">Annual Events</div>
                </div>
                <div className="p-2">
                    <div className="text-3xl font-bold text-accent">2 Years</div>
                    <div className="text-xs uppercase tracking-wider font-semibold text-gray-500 mt-1">Timeframe</div>
                </div>
            </div>
        </div>

        <h3 className="text-xl font-bold mt-8 mb-4 font-serif text-primary">Background</h3>
        <p className="mb-4">I identified a strategic opportunity to deepen major gift engagement among members who seasonally or permanently reside in Florida. The goal: maintain momentum outside Ohio and build a repeatable cultivation engine in a geography with high donor potential.</p>

        <h3 className="text-xl font-bold mt-8 mb-4 font-serif text-primary">Challenge</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Starting point was ~100 partially complete records indicating possible Florida residency.</li>
            <li>Limited visibility into seasonality and updated contact details.</li>
            <li>Ad hoc winter board gathering with no year-round structure.</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4 font-serif text-primary">Approach</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white border border-gray-100 p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-accent mb-2">1) Data Enrichment & Verification</h4>
                <ul className="list-disc pl-4 text-sm text-gray-600 space-y-2">
                    <li>Cross-referenced member files with NCOA/USPS, property and voter records, and 3rd‑party wealth/locator data.</li>
                    <li>Standardized seasonality flags (primary, seasonal, snowbird) and validated preferred contact channels.</li>
                    <li>Instituted rolling refresh cadence to capture moves and new additions.</li>
                </ul>
            </div>
            <div className="bg-white border border-gray-100 p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-accent mb-2">2) Engagement Design</h4>
                <ul className="list-disc pl-4 text-sm text-gray-600 space-y-2">
                    <li>Scaled a one‑off winter board meeting into a structured event series (4–5 annually).</li>
                    <li>Matched program themes to member interests; created warm handoffs for gift officers.</li>
                    <li>Built a year‑round communication sequence aligned to residency windows.</li>
                </ul>
            </div>
        </div>

        <h3 className="text-xl font-bold mt-8 mb-4 font-serif text-primary">Transferability</h3>
        <p className="mb-4">This playbook is directly applicable to universities and other nonprofits managing geographically dispersed constituents (e.g., alumni in Sun Belt metros). Key ingredients:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Define segment rules for seasonality; enrich addresses and contact preferences.</li>
            <li>Stand up a repeatable event cadence aligned to residency windows.</li>
            <li>Operationalize warm introductions and follow‑ups for major gift officers.</li>
        </ul>

        <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-lg text-sm text-gray-700">
             <strong>My Role & Tooling:</strong> Responsibilities included segmentation logic, data sourcing & verification, KPI design, event targeting, and internal enablement using CRM exports, Lexis, property/voter data sources, and Python automation.
        </div>
      </div>
    )
  }
];

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  if (selectedPost) {
    return (
      <div className="bg-white min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => setSelectedPost(null)}
            className="flex items-center text-gray-500 hover:text-accent mb-8 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Blog
          </button>
          
          <article className="prose prose-lg prose-slate max-w-none">
            <div className="flex items-center gap-2 mb-4 text-sm text-accent font-bold uppercase tracking-wider">
              <Tag className="h-4 w-4" /> {selectedPost.category}
            </div>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              {selectedPost.title}
            </h1>
             <div className="flex items-center text-gray-500 mb-8 border-b border-gray-100 pb-8">
                <span className="flex items-center mr-6"><Calendar className="h-4 w-4 mr-2" /> {selectedPost.date}</span>
                <span className="flex items-center"><Clock className="h-4 w-4 mr-2" /> {selectedPost.readTime}</span>
            </div>
            <div className="text-gray-800">
                {selectedPost.content}
            </div>
            
            <div className="mt-12 p-6 bg-gray-50 rounded-xl text-sm text-gray-500 text-center italic">
              <p>The views on this website/post are mine alone and not those of the Cleveland Museum of Art.</p>
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-primary">Blog & Insights</h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Technical tutorials, strategic think-pieces, and updates on my journey utilizing AI in the nonprofit sector.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {POSTS.map((post) => (
            <article 
              key={post.id} 
              onClick={() => setSelectedPost(post)}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="h-56 overflow-hidden relative group">
                <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center text-xs font-bold text-accent uppercase tracking-wider mb-3">
                  {post.category}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 font-serif leading-snug group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-1 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-100 pt-4">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;