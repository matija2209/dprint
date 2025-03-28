// components/CookieConsent.tsx
'use client'

import { useState, useEffect } from 'react'
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import { setCookieConsent } from '@/actions/consent'

// Helper function to check consent status from localStorage
const getConsentStatus = () => {
  if (typeof window === 'undefined') return null; // Server-side check
  return localStorage.getItem('cookie-consent');
}

export default function CookieConsent() {
  const t = useTranslations('CookieConsent')
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Mark component as mounted to prevent hydration mismatch
    setMounted(true)
    
    // Check if consent has been given previously
    const consentStatus = getConsentStatus()
    setIsVisible(consentStatus === null) // Show banner if no preference stored
  }, [])

  const handleAccept = async () => {
    // Store in localStorage for client-side persistence
    localStorage.setItem('cookie-consent', 'true')
    
    // Also use the server action if you need server-side consent tracking
    await setCookieConsent(true)
    
    setIsVisible(false)
  }

  const handleDecline = async () => {
    // Store in localStorage for client-side persistence
    localStorage.setItem('cookie-consent', 'false')
    
    // Also use the server action if you need server-side consent tracking
    await setCookieConsent(false)
    
    setIsVisible(false)
  }

  // Don't render anything during SSR or if not visible
  if (!mounted || !isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 z-50 bg-background/80 backdrop-blur-sm">
      <Card className="w-full max-w-4xl mx-auto shadow-lg border-primary/10">
        <CardHeader>
          <CardTitle>{t('title')}</CardTitle>
          <CardDescription>
            {t('shortDescription')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            {t('description')}
          </p>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button variant="outline" onClick={handleDecline}>
            {t('decline')}
          </Button>
          <Button onClick={handleAccept}>
            {t('accept')}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}