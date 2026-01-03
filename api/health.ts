import { createClient } from '@supabase/supabase-js';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const startTime = Date.now();

  // Get environment variables (Vercel uses process.env, not import.meta.env)
  const supabaseUrl = process.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return res.status(500).json({
      success: false,
      error: 'Missing Supabase environment variables',
      timestamp: new Date().toISOString(),
    });
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  try {
    // Perform a simple query to keep the database active
    // This queries the categories table (you can change this to any table you have)
    const { data, error } = await supabase
      .from('categories')
      .select('count')
      .limit(1);

    const responseTime = Date.now() - startTime;

    if (error) {
      console.error('Health check failed:', error);
      return res.status(500).json({
        success: false,
        error: error.message,
        responseTime: `${responseTime}ms`,
        timestamp: new Date().toISOString(),
      });
    }

    console.log('Health check passed:', {
      responseTime: `${responseTime}ms`,
      timestamp: new Date().toISOString(),
    });

    return res.status(200).json({
      success: true,
      message: 'Database is healthy and active',
      responseTime: `${responseTime}ms`,
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    const responseTime = Date.now() - startTime;
    console.error('Health check error:', err);

    return res.status(500).json({
      success: false,
      error: err instanceof Error ? err.message : 'Unknown error',
      responseTime: `${responseTime}ms`,
      timestamp: new Date().toISOString(),
    });
  }
}
