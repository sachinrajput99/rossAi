"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  {
    label: "AI DRAFTING ASSISTANT",
    value: "drafting",
    heading: "AI Drafting Assistant (MS Word Add-in)",
    content: (
      <div className="grid gap-4">
        <p className="text-gray-300 mb-4">
          A direct and powerful competitor to Harvey's Word Add-in, operating
          seamlessly inside Microsoft Word—the primary work environment for
          lawyers.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 shadow-md">
            <h3 className="text-lg font-semibold text-cyan-400 mb-2">
              📝 Drafting
            </h3>
            <p className="text-gray-300 text-sm">
              Generate first drafts of legal documents (motions, contracts,
              client letters) from simple natural language prompts.
            </p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 shadow-md">
            <h3 className="text-lg font-semibold text-cyan-400 mb-2">
              📄 Summarization
            </h3>
            <p className="text-gray-300 text-sm">
              Create concise summaries of lengthy documents or specific
              sections.
            </p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 shadow-md">
            <h3 className="text-lg font-semibold text-cyan-400 mb-2">
              🔍 Analysis & Redlining
            </h3>
            <p className="text-gray-300 text-sm">
              Analyze third-party contracts, flag risky or non-standard clauses,
              and suggest alternative language.
            </p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 shadow-md">
            <h3 className="text-lg font-semibold text-cyan-400 mb-2">
              📂 Templates
            </h3>
            <p className="text-gray-300 text-sm">
              Pre-loaded library of templates for common legal documents across
              multiple practice areas.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "SECURE CASE FILE VAULT",
    value: "vault",
    heading: "Secure Case File Vault",
    content: (
      <div className="grid gap-4">
        <p className="text-gray-300 mb-4">
          This feature mirrors the concept of Harvey&apos;s Vault but is tailored for
          the scale and needs of SME firms. It provides a centralized,
          encrypted, and easily navigable repository for all documents related
          to a specific case or matter.
        </p>

        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-md text-left">
          <h3 className="text-lg font-semibold text-cyan-400 mb-3">
            ✨ Key Differentiator: Semantic Search
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            Instead of a static folder of documents, the Vault transforms into
            an interactive knowledge base. Users can ask natural language
            questions about their entire case file:
          </p>
          <ul className="text-gray-400 space-y-2 text-sm list-disc pl-5">
            <li>
              <span className="text-white">
                “Find all emails where the expert witness discusses the timeline
                of events.”
              </span>
            </li>
            <li>
              <span className="text-white">
                “Summarize our client's position from the initial complaint.”
              </span>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    label: "GROUNDED LEGAL RESEARCH",
    value: "research",
    heading: "Grounded Legal Research Engine",
    content: (
      <div className="grid gap-4">
        <p className="text-gray-300 mb-4">
          This module provides a trustworthy and reliable legal research
          capability. It leverages a
          <span className="text-cyan-400">
            {" "}
            Retrieval-Augmented Generation (RAG)
          </span>{" "}
          architecture to ensure that all answers to legal questions are
          factually accurate and directly traceable to specific, citable sources
          from a corpus of public case law and statutes.
        </p>

        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-md text-left">
          <h3 className="text-lg font-semibold text-cyan-400 mb-3">
            ⚖️ Why It Matters
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            By grounding outputs in verifiable sources, this engine addresses
            the legal profession's deep-seated skepticism towards AI-generated
            content and removes the fear of hallucinations.
          </p>
          <ul className="text-gray-400 space-y-2 text-sm list-disc pl-5">
            <li>
              <span className="text-white">
                Factually accurate answers only
              </span>
            </li>
            <li>
              <span className="text-white">Citable case law and statutes</span>
            </li>
            <li>
              <span className="text-white">Transparency & trust built-in</span>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    label: "PMS INTEGRATION",
    value: "pms",
    heading: "Practice Management System (PMS) Integration (Clio First)",
    content: (
      <div className="grid gap-4">
        <p className="text-gray-300 mb-4">
          This is the most critical strategic feature for market penetration. A
          deep, bi-directional integration will be built with{" "}
          <span className="text-cyan-400">Clio</span>, the market-leading PMS
          for small law firms.
        </p>

        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-md text-left">
          <h3 className="text-lg font-semibold text-cyan-400 mb-3">
            🔗 Key Benefits
          </h3>
          <ul className="text-gray-400 space-y-3 text-sm list-disc pl-5">
            <li>
              <span className="text-white font-medium">
                Seamless Data Sync:
              </span>{" "}
              Automatically associate documents in the Ross Vault with the
              correct client matters in Clio.
            </li>
            <li>
              <span className="text-white font-medium">
                Automated Time Tracking:
              </span>{" "}
              Capture time spent on research and drafting in Ross and push it
              directly to Clio for billing.
            </li>
            <li>
              <span className="text-white font-medium">Unified Workflow:</span>{" "}
              Position Ross as an embedded, indispensable part of the firm's
              operational workflow rather than a separate tool.
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    label: "NO-CODE WORKFLOW",
    value: "workflow",
    heading: "No-Code Workflow Builder",
    content: (
      <div className="grid gap-4">
        <p className="text-gray-300 mb-4">
          This feature democratizes the power of Harvey's custom{" "}
          <span className="text-cyan-400">Workflows</span>
          for non-technical users. It provides an intuitive, visual,
          drag-and-drop interface that allows firms to automate their unique,
          repeatable processes.
        </p>

        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-md text-left">
          <h3 className="text-lg font-semibold text-cyan-400 mb-3">
            ⚡ What Firms Can Do
          </h3>
          <ul className="text-gray-400 space-y-3 text-sm list-disc pl-5">
            <li>
              <span className="text-white font-medium">
                Client Intake Automation:
              </span>{" "}
              Instantly create a workflow that generates an engagement letter
              after capturing client details.
            </li>
            <li>
              <span className="text-white font-medium">
                Discovery Requests:
              </span>{" "}
              Build workflows that draft standard interrogatories tailored to
              case type.
            </li>
            <li>
              <span className="text-white font-medium">
                Custom Automations:
              </span>{" "}
              Any repeatable legal process can be modeled and executed without
              code.
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    label: "ANALYTICS DASHBOARD",
    value: "analytics",
    heading: "Analytics & Reporting Dashboard",
    content: (
      <div className="grid gap-4">
        <p className="text-gray-300 mb-4">
          This module provides firm partners and administrators with clear,
          actionable insights into how
          <span className="text-cyan-400"> Ross</span> is being used and the
          value it is creating. Metrics will include usage by attorney, time
          saved on specific tasks, and most-used features.
        </p>

        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-md text-left">
          <h3 className="text-lg font-semibold text-cyan-400 mb-3">
            📊 Why It Matters
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            These insights are essential for demonstrating ROI, justifying the
            subscription cost, and encouraging wider adoption within the firm.
          </p>
          <ul className="text-gray-400 space-y-3 text-sm list-disc pl-5">
            <li>
              <span className="text-white font-medium">Usage by Attorney:</span>{" "}
              Track individual adoption and engagement.
            </li>
            <li>
              <span className="text-white font-medium">Time Saved:</span>{" "}
              Quantify efficiency gains on drafting, research, and workflows.
            </li>
            <li>
              <span className="text-white font-medium">
                Feature Popularity:
              </span>{" "}
              See which AI tools deliver the most value.
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    label: "JUDICIAL & COUNSEL ANALYTICS",
    value: "analyticsEngine",
    heading: "Judicial and Counsel Analytics Engine",
    content: (
      <div className="grid gap-4">
        <p className="text-gray-300 mb-4">
          This powerful tool provides data-driven insights to help lawyers
          select the optimal judge and understand their opposing counsel. By
          analyzing vast datasets of court records, historical rulings, and
          professional profiles, the engine gives attorneys a strategic edge.
        </p>

        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-md text-left space-y-5">
          <div>
            <h3 className="text-lg font-semibold text-cyan-400 mb-2">
              ⚖️ Judge Profiling
            </h3>
            <p className="text-gray-300 text-sm">
              Generate comprehensive judge profiles, detailing ruling tendencies
              on specific motions (e.g., motions to dismiss), case type
              experience, average case timelines, and frequently cited
              precedents. Attorneys can tailor arguments to align with a judge's
              history and preferences.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-cyan-400 mb-2">
              👥 Counsel Selection
            </h3>
            <p className="text-gray-300 text-sm">
              For firms needing co-counsel or local counsel, the platform
              analyzes attorney performance metrics, success rates in specific
              jurisdictions, and case-type expertise to recommend the best-fit
              legal professionals.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-cyan-400 mb-2">
              🕵️ Opposing Counsel Analysis
            </h3>
            <p className="text-gray-300 text-sm">
              Understand your opponent's litigation history and strategies,
              including past arguments, motion success rates, and settlement
              behaviors — helping lawyers anticipate and counter moves
              effectively.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "CASE STRATEGY",
    value: "caseStrategy",
    heading: "Dynamic Case Strategy Formulation",
    content: (
      <div className="grid gap-4">
        <p className="text-gray-300 mb-4">
          Building on the analytics engine, this feature acts as an AI-powered
          strategy consultant, helping lawyers prepare for hearings and adapt
          their approach in real-time.
        </p>

        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-md text-left space-y-5">
          <div>
            <h3 className="text-lg font-semibold text-cyan-400 mb-2">
              🧠 Argument Simulation
            </h3>
            <p className="text-gray-300 text-sm">
              The AI simulates how specific legal arguments might resonate with
              a judge, based on their past rulings and judicial philosophy. It
              can test various litigation scenarios to predict outcomes and
              anticipate counter-arguments.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-cyan-400 mb-2">
              📑 Hearing Preparation
            </h3>
            <p className="text-gray-300 text-sm">
              The platform structures hearing strategies by identifying the most
              successful arguments from similar past cases, and suggests a
              logical flow for presenting evidence to maximize persuasiveness.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "POLICY INTELLIGENCE",
    value: "policyIntelligence",
    heading: "Lobbying and Policy Intelligence Module",
    content: (
      <div className="grid gap-4">
        <p className="text-gray-300 mb-4">
          This feature equips firms with tools to understand and navigate the
          legislative and regulatory landscape surrounding a case. It combines
          lobbying data with ethical safeguards to inform strategy without
          crossing compliance lines.
        </p>

        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-md text-left space-y-5">
          <div>
            <h3 className="text-lg font-semibold text-cyan-400 mb-2">
              📊 Lobbying Data Integration
            </h3>
            <p className="text-gray-300 text-sm">
              By integrating with federal and state lobbying databases, the
              module tracks which entities are lobbying on specific bills, their
              focus issues, and the government agencies they are targeting.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-cyan-400 mb-2">
              🔎 Key Influencer Identification
            </h3>
            <p className="text-gray-300 text-sm">
              Analyze lobbying contracts and filings to identify the most
              influential lobbyists and firms working on issues relevant to a
              case — helping lawyers understand the key players in a policy
              debate.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-cyan-400 mb-2">
              ⚖️ Ethical Considerations
            </h3>
            <p className="text-gray-300 text-sm">
              The tool provides only publicly available data and is built with
              strict ethical guidelines. It will not facilitate direct lobbying.
              All insights include clear reminders of professional conduct rules
              governing interactions with officials and policymakers.
            </p>
          </div>
        </div>
      </div>
    ),
  },
];

export default function ScrollSections() {
  const [activeTab, setActiveTab] = useState("voice");
  const [visibleSections, setVisibleSections] = useState(
    Object.fromEntries(sections.map((s) => [s.value, false]))
  );

  const sectionRefs = Object.fromEntries(
    sections.map((s) => [s.value, useRef(null)])
  );

  useEffect(() => {
    const observerOptions = { root: null, threshold: 0.6 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("data-id");
        if (entry.isIntersecting) {
          setActiveTab(id);
          setVisibleSections((prev) => ({ ...prev, [id]: true }));
        }
      });
    }, observerOptions);

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  const handleTabClick = (tab) => {
    sectionRefs[tab].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="flex min-h-screen py-16 lg:py-40 w-full bg-black text-white">
      {/* Sidebar */}
      <div className="w-1/4 border-r border-gray-700 p-4 bg-black sticky top-20 flex flex-col justify-center z-10">
        {sections.map((tab) => (
          <div
            key={tab.value}
            onClick={() => handleTabClick(tab.value)}
            className="cursor-pointer py-2 text-sm font-mono tracking-wider relative"
          >
            <span
              className={
                activeTab === tab.value ? "text-cyan-400" : "text-gray-500"
              }
            >
              {tab.label}
            </span>
            <span
              className={`absolute bottom-0 left-0 h-[2px] bg-cyan-400 transition-all duration-300 ease-in-out ${
                activeTab === tab.value ? "w-full" : "w-0"
              }`}
            />
          </div>
        ))}
      </div>

      {/* Scrollable Content */}
      <div className="w-3/4 h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth scrollbar-hide">
        {sections.map((section) => (
          <section
            key={section.value}
            ref={sectionRefs[section.value]}
            data-id={section.value}
            className="snap-start h-screen flex items-center justify-center p-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={
                visibleSections[section.value] ? { opacity: 1, y: 0 } : {}
              }
              transition={{ duration: 0.8 }}
              className="max-w-3xl text-center"
            >
              <h1 className="text-3xl font-bold mb-6">{section.heading}</h1>
              {section.content}
            </motion.div>
          </section>
        ))}
      </div>
    </div>
  );
}
