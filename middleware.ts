/**
 * Middleware Next.js pour protéger les routes ADMIN uniquement
 * Le site public (/) est accessible sans authentification
 * Les routes /dashboard, /login, /signup nécessitent une vérification
 */

import { type NextRequest } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'

export async function middleware(request: NextRequest) {
  // Laisser passer toutes les requêtes pour le site public
  // Le middleware updateSession gère la protection des routes admin
  return await updateSession(request)
}

export const config = {
  matcher: [
    /*
     * Correspond uniquement aux routes admin et auth :
     * - /dashboard/*
     * - /login
     * - /signup
     * Exclut le site public (/) pour qu'il soit accessible à tous
     */
    '/dashboard/:path*',
    '/login',
    '/signup',
  ],
}
