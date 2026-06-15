'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import {
  MARKET_TITLE,
  MARKET_SUBTITLE,
  proposition1Data,
  proposition2Data,
  proposition3Data,
  type CustomerBase,
  type CustomerProposition3,
} from '@/lib/customer-database-data'

const thBase = 'border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black'
const thGroup = 'border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black'
const tdBase = 'border border-gray-300 px-3 py-2 text-sm text-black'

function MarketHeader() {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold text-black leading-snug">{MARKET_TITLE}</h2>
      <p className="text-sm text-gray-700 mt-2 leading-relaxed">{MARKET_SUBTITLE}</p>
    </div>
  )
}

function ContactCells({ customer }: { customer: CustomerBase }) {
  return (
    <>
      <td className={tdBase}>{customer.keyContactPerson}</td>
      <td className={tdBase}>{customer.designation}</td>
      <td className={`${tdBase} text-blue-600`}>
        <a href={`mailto:${customer.emailAddress}`} className="hover:underline">
          {customer.emailAddress}
        </a>
      </td>
      <td className={tdBase}>{customer.telephone}</td>
      <td className={`${tdBase} text-blue-600`}>
        <a
          href={`https://${customer.linkedInProfile}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          {customer.linkedInProfile}
        </a>
      </td>
      <td className={`${tdBase} text-blue-600`}>
        <a
          href={`https://${customer.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          {customer.website}
        </a>
      </td>
    </>
  )
}

function CustomerInfoCells({ customer }: { customer: CustomerBase }) {
  return (
    <>
      <td className={`${tdBase} text-center`}>{customer.sNo}</td>
      <td className={tdBase}>{customer.customerCompanyName}</td>
      <td className={tdBase}>{customer.businessOverview}</td>
      <td className={tdBase}>{customer.nonHvacCustomerEntityType}</td>
      <td className={tdBase}>{customer.bpheApplication}</td>
      <td className={tdBase}>{customer.annualRevenue}</td>
      <td className={tdBase}>{customer.sizeOperatingScale}</td>
    </>
  )
}

interface PropositionProps {
  title: string
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}

function Proposition({ title, isOpen, onToggle, children }: PropositionProps) {
  return (
    <div className="border border-gray-200 rounded-lg mb-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-gray-50 rounded-lg transition-colors"
      >
        <span className="text-lg font-semibold text-black">{title}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && <div className="px-2 pb-4 bg-white rounded-b-lg">{children}</div>}
    </div>
  )
}

function Proposition1Table() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className={`${thGroup} bg-gray-100 min-w-[50px]`}>S.No.</th>
            <th colSpan={6} className={`${thGroup} bg-[#E8C4A0]`}>
              Customer Information
            </th>
            <th colSpan={6} className={`${thGroup} bg-[#87CEEB]`}>
              Contact Details
            </th>
          </tr>
          <tr className="bg-gray-50">
            <th className={`${thBase} bg-gray-100 min-w-[50px]`}>S.No.</th>
            <th className={`${thBase} bg-[#FFF8DC] min-w-[200px]`}>Customer / Company Name</th>
            <th className={`${thBase} bg-[#FFF8DC] min-w-[220px]`}>Business Overview</th>
            <th className={`${thBase} bg-[#FFF8DC] min-w-[180px]`}>Non-HVAC Customer Entity Type</th>
            <th className={`${thBase} bg-[#FFF8DC] min-w-[220px]`}>Refrigerant-to-Liquid BPHE Application</th>
            <th className={`${thBase} bg-[#FFF8DC] min-w-[200px]`}>
              Annual Revenue in US$ Million / Process Cooling Budget Signal
            </th>
            <th className={`${thBase} bg-[#FFF8DC] min-w-[160px]`}>Size / Operating Scale</th>
            <th className={`${thBase} bg-[#B0E0E6] min-w-[140px]`}>Key Contact Person</th>
            <th className={`${thBase} bg-[#B0E0E6] min-w-[180px]`}>Designation / Decision-Maker Role</th>
            <th className={`${thBase} bg-[#B0E0E6] min-w-[180px]`}>Email Address</th>
            <th className={`${thBase} bg-[#B0E0E6] min-w-[160px]`}>Telephone / WhatsApp Number</th>
            <th className={`${thBase} bg-[#B0E0E6] min-w-[160px]`}>LinkedIn Profile</th>
            <th className={`${thBase} bg-[#B0E0E6] min-w-[130px]`}>Website</th>
          </tr>
        </thead>
        <tbody>
          {proposition1Data.map((customer, index) => (
            <tr key={customer.sNo} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <CustomerInfoCells customer={customer} />
              <ContactCells customer={customer} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Proposition2Table() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className={`${thGroup} bg-gray-100`}>S.No.</th>
            <th colSpan={6} className={`${thGroup} bg-[#E8C4A0]`}>
              Customer Information
            </th>
            <th colSpan={6} className={`${thGroup} bg-[#87CEEB]`}>
              Contact Details
            </th>
            <th colSpan={5} className={`${thGroup} bg-[#98D8C8]`}>
              Buy Drivers
            </th>
          </tr>
          <tr className="bg-gray-50">
            <th className={`${thBase} bg-gray-100`}>S.No.</th>
            <th className={`${thBase} bg-[#FFF8DC] min-w-[200px]`}>Customer / Company Name</th>
            <th className={`${thBase} bg-[#FFF8DC] min-w-[220px]`}>Business Overview</th>
            <th className={`${thBase} bg-[#FFF8DC] min-w-[180px]`}>Non-HVAC Customer Entity Type</th>
            <th className={`${thBase} bg-[#FFF8DC] min-w-[220px]`}>Refrigerant-to-Liquid BPHE Application</th>
            <th className={`${thBase} bg-[#FFF8DC] min-w-[200px]`}>
              Annual Revenue in US$ Million / Process Cooling Budget Signal
            </th>
            <th className={`${thBase} bg-[#FFF8DC] min-w-[160px]`}>Size / Operating Scale</th>
            <th className={`${thBase} bg-[#B0E0E6] min-w-[140px]`}>Key Contact Person</th>
            <th className={`${thBase} bg-[#B0E0E6] min-w-[180px]`}>Designation / Decision-Maker Role</th>
            <th className={`${thBase} bg-[#B0E0E6] min-w-[180px]`}>Email Address</th>
            <th className={`${thBase} bg-[#B0E0E6] min-w-[160px]`}>Telephone / WhatsApp Number</th>
            <th className={`${thBase} bg-[#B0E0E6] min-w-[160px]`}>LinkedIn Profile</th>
            <th className={`${thBase} bg-[#B0E0E6] min-w-[130px]`}>Website</th>
            <th className={`${thBase} bg-[#C5E8D8] min-w-[180px]`}>BPHE Purchase Criteria</th>
            <th className={`${thBase} bg-[#C5E8D8] min-w-[180px]`}>Process Cooling Pain Points</th>
            <th className={`${thBase} bg-[#C5E8D8] min-w-[200px]`}>
              Refrigerant / Process / Compliance Complexity
            </th>
            <th className={`${thBase} bg-[#C5E8D8] min-w-[160px]`}>Risk Exposure</th>
            <th className={`${thBase} bg-[#C5E8D8] min-w-[180px]`}>Buying Triggers</th>
          </tr>
        </thead>
        <tbody>
          {proposition2Data.map((customer, index) => (
            <tr key={customer.sNo} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <CustomerInfoCells customer={customer} />
              <ContactCells customer={customer} />
              <td className={tdBase}>{customer.bphePurchaseCriteria}</td>
              <td className={tdBase}>{customer.processCoolingPainPoints}</td>
              <td className={tdBase}>{customer.refrigerantProcessCompliance}</td>
              <td className={tdBase}>{customer.riskExposure}</td>
              <td className={tdBase}>{customer.buyingTriggers}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Proposition3Table() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className={`${thGroup} bg-gray-100`}>S.No.</th>
            <th colSpan={6} className={`${thGroup} bg-[#E8C4A0]`}>
              Customer Information
            </th>
            <th colSpan={6} className={`${thGroup} bg-[#87CEEB]`}>
              Contact Details
            </th>
            <th colSpan={5} className={`${thGroup} bg-[#98D8C8]`}>
              Buy Drivers
            </th>
            <th colSpan={5} className={`${thGroup} bg-[#DDA0DD]`}>
              Procurement Behaviour Metrics
            </th>
            <th colSpan={3} className={`${thGroup} bg-[#DEB887]`}>
              Solution Requirement
            </th>
            <th colSpan={2} className={`${thGroup} bg-[#87CEEB]`}>
              CMI Insights
            </th>
          </tr>
          <tr className="bg-gray-50">
            <th className={`${thBase} bg-gray-100`}>S.No.</th>
            <th className={`${thBase} bg-[#FFF8DC] min-w-[200px]`}>Customer / Company Name</th>
            <th className={`${thBase} bg-[#FFF8DC] min-w-[220px]`}>Business Overview</th>
            <th className={`${thBase} bg-[#FFF8DC] min-w-[180px]`}>Non-HVAC Customer Entity Type</th>
            <th className={`${thBase} bg-[#FFF8DC] min-w-[220px]`}>Refrigerant-to-Liquid BPHE Application</th>
            <th className={`${thBase} bg-[#FFF8DC] min-w-[200px]`}>
              Annual Revenue in US$ Million / Process Cooling Budget Signal
            </th>
            <th className={`${thBase} bg-[#FFF8DC] min-w-[160px]`}>Size / Operating Scale</th>
            <th className={`${thBase} bg-[#B0E0E6] min-w-[140px]`}>Key Contact Person</th>
            <th className={`${thBase} bg-[#B0E0E6] min-w-[180px]`}>Designation / Decision-Maker Role</th>
            <th className={`${thBase} bg-[#B0E0E6] min-w-[180px]`}>Email Address</th>
            <th className={`${thBase} bg-[#B0E0E6] min-w-[160px]`}>Telephone / WhatsApp Number</th>
            <th className={`${thBase} bg-[#B0E0E6] min-w-[160px]`}>LinkedIn Profile</th>
            <th className={`${thBase} bg-[#B0E0E6] min-w-[130px]`}>Website</th>
            <th className={`${thBase} bg-[#C5E8D8] min-w-[180px]`}>BPHE Purchase Criteria</th>
            <th className={`${thBase} bg-[#C5E8D8] min-w-[180px]`}>Process Cooling Pain Points</th>
            <th className={`${thBase} bg-[#C5E8D8] min-w-[200px]`}>
              Refrigerant / Process / Compliance Complexity
            </th>
            <th className={`${thBase} bg-[#C5E8D8] min-w-[160px]`}>Risk Exposure</th>
            <th className={`${thBase} bg-[#C5E8D8] min-w-[180px]`}>Buying Triggers</th>
            <th className={`${thBase} bg-[#E8C4E8] min-w-[160px]`}>Budget Owner</th>
            <th className={`${thBase} bg-[#E8C4E8] min-w-[180px]`}>Procurement Model</th>
            <th className={`${thBase} bg-[#E8C4E8] min-w-[200px]`}>Vendor Selection Criteria</th>
            <th className={`${thBase} bg-[#E8C4E8] min-w-[180px]`}>Preferred Engagement Mode</th>
            <th className={`${thBase} bg-[#E8C4E8] min-w-[200px]`}>
              Preferred Deployment / Service Contract
            </th>
            <th className={`${thBase} bg-[#F5DEB3] min-w-[180px]`}>Preferred Solution Type</th>
            <th className={`${thBase} bg-[#F5DEB3] min-w-[220px]`}>
              Integration / Technical / Service Requirement
            </th>
            <th className={`${thBase} bg-[#F5DEB3] min-w-[180px]`}>Performance Expectation</th>
            <th className={`${thBase} bg-[#B0E0E6] min-w-[200px]`}>Benchmark Summary</th>
            <th className={`${thBase} bg-[#B0E0E6] min-w-[200px]`}>Additional CMI Notes</th>
          </tr>
        </thead>
        <tbody>
          {proposition3Data.map((customer: CustomerProposition3, index) => (
            <tr key={customer.sNo} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <CustomerInfoCells customer={customer} />
              <ContactCells customer={customer} />
              <td className={tdBase}>{customer.bphePurchaseCriteria}</td>
              <td className={tdBase}>{customer.processCoolingPainPoints}</td>
              <td className={tdBase}>{customer.refrigerantProcessCompliance}</td>
              <td className={tdBase}>{customer.riskExposure}</td>
              <td className={tdBase}>{customer.buyingTriggers}</td>
              <td className={tdBase}>{customer.budgetOwner}</td>
              <td className={tdBase}>{customer.procurementModel}</td>
              <td className={tdBase}>{customer.vendorSelectionCriteria}</td>
              <td className={tdBase}>{customer.preferredEngagementMode}</td>
              <td className={tdBase}>{customer.preferredDeploymentContract}</td>
              <td className={tdBase}>{customer.preferredSolutionType}</td>
              <td className={tdBase}>{customer.integrationTechnicalRequirement}</td>
              <td className={tdBase}>{customer.performanceExpectation}</td>
              <td className={tdBase}>{customer.benchmarkSummary}</td>
              <td className={tdBase}>{customer.additionalCmiNotes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

interface CustomerIntelligenceDatabaseProps {
  title?: string
  height?: number
}

export default function CustomerIntelligenceDatabase({ title }: CustomerIntelligenceDatabaseProps) {
  const [openProposition, setOpenProposition] = useState<number | null>(1)

  const toggleProposition = (num: number) => {
    setOpenProposition(openProposition === num ? null : num)
  }

  return (
    <div className="w-full">
      {title && <h2 className="text-xl font-bold text-black mb-4">{title}</h2>}
      <MarketHeader />

      <Proposition
        title="Proposition 1 - Basic"
        isOpen={openProposition === 1}
        onToggle={() => toggleProposition(1)}
      >
        <Proposition1Table />
      </Proposition>

      <Proposition
        title="Proposition 2 - Advance"
        isOpen={openProposition === 2}
        onToggle={() => toggleProposition(2)}
      >
        <Proposition2Table />
      </Proposition>

      <Proposition
        title="Proposition 3 - Premium"
        isOpen={openProposition === 3}
        onToggle={() => toggleProposition(3)}
      >
        <Proposition3Table />
      </Proposition>
    </div>
  )
}
