// GEGENEREERD BESTAND. Niet met de hand wijzigen.
//
// Bron: het Supabase-schema van project Mindfull-App-Camino (fpvvmgdzftmkyiqfvpjj).
// Opnieuw genereren na een migratie:
//
//   supabase gen types typescript --project-id fpvvmgdzftmkyiqfvpjj > packages/types/database.ts
//
// of via de MCP `supabase-mind`, tool `generate_typescript_types`.
// Zie docs/backend-draaiboek.md.

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      admin_users: {
        Row: {
          added_on: string
          role: string
          user_id: string
        }
        Insert: {
          added_on?: string
          role: string
          user_id: string
        }
        Update: {
          added_on?: string
          role?: string
          user_id?: string
        }
        Relationships: []
      }
      app_status: {
        Row: {
          id: boolean
          maintenance_nl: string | null
          min_version: string
          updated_at: string
        }
        Insert: {
          id?: boolean
          maintenance_nl?: string | null
          min_version?: string
          updated_at?: string
        }
        Update: {
          id?: boolean
          maintenance_nl?: string | null
          min_version?: string
          updated_at?: string
        }
        Relationships: []
      }
      content_tips: {
        Row: {
          body: Json
          created_at: string
          id: string
          published_at: string | null
          status: string
          title: string
          topic: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          body: Json
          created_at?: string
          id?: string
          published_at?: string | null
          status?: string
          title: string
          topic: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          body?: Json
          created_at?: string
          id?: string
          published_at?: string | null
          status?: string
          title?: string
          topic?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          id: string
          last_active_at: string
          last_checkin_on: string | null
          last_checkin_part: number | null
          last_usage_on: string | null
        }
        Insert: {
          id: string
          last_active_at?: string
          last_checkin_on?: string | null
          last_checkin_part?: number | null
          last_usage_on?: string | null
        }
        Update: {
          id?: string
          last_active_at?: string
          last_checkin_on?: string | null
          last_checkin_part?: number | null
          last_usage_on?: string | null
        }
        Relationships: []
      }
      usage_daily: {
        Row: {
          day: string
          event: string
          item: string
          total: number
        }
        Insert: {
          day: string
          event: string
          item?: string
          total: number
        }
        Update: {
          day?: string
          event?: string
          item?: string
          total?: number
        }
        Relationships: [
          {
            foreignKeyName: "usage_daily_event_fkey"
            columns: ["event"]
            isOneToOne: false
            referencedRelation: "usage_event"
            referencedColumns: ["code"]
          },
        ]
      }
      usage_event: {
        Row: {
          code: string
          item_kind: string
          items: string[] | null
        }
        Insert: {
          code: string
          item_kind: string
          items?: string[] | null
        }
        Update: {
          code?: string
          item_kind?: string
          items?: string[] | null
        }
        Relationships: []
      }
      weather_hourly: {
        Row: {
          day: string
          hour: number
          province: string
          total: number
          weather: string
        }
        Insert: {
          day?: string
          hour?: number
          province?: string
          total: number
          weather: string
        }
        Update: {
          day?: string
          hour?: number
          province?: string
          total?: number
          weather?: string
        }
        Relationships: [
          {
            foreignKeyName: "weather_hourly_weather_fkey"
            columns: ["weather"]
            isOneToOne: false
            referencedRelation: "weather_type"
            referencedColumns: ["code"]
          },
        ]
      }
      weather_type: {
        Row: {
          code: string
          label: string
          sort_order: number
        }
        Insert: {
          code: string
          label: string
          sort_order: number
        }
        Update: {
          code?: string
          label?: string
          sort_order?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      admin_role: { Args: never; Returns: string }
      admin_tip_delete: { Args: { p_id: string }; Returns: undefined }
      admin_tip_save: {
        Args: { p_body: Json; p_id: string; p_title: string; p_topic: string }
        Returns: string
      }
      admin_tip_set_status: {
        Args: { p_id: string; p_status: string }
        Returns: undefined
      }
      admin_tips_list: {
        Args: never
        Returns: {
          body: Json
          id: string
          published_at: string
          status: string
          title: string
          topic: string
          updated_at: string
        }[]
      }
      content_body_problem: { Args: { p_body: Json }; Returns: string }
      delete_own_account: { Args: never; Returns: undefined }
      get_app_status: {
        Args: never
        Returns: {
          maintenance: string
          min_version: string
        }[]
      }
      has_admin_role: { Args: { p_min: string }; Returns: boolean }
      log_usage: { Args: { p_events: Json }; Returns: number }
      published_tips: { Args: never; Returns: Json }
      purge_inactive_accounts: { Args: { p_days?: number }; Returns: number }
      submit_weather: {
        Args: { p_province?: string; p_weather: string }
        Returns: number
      }
      usage_scrub: { Args: never; Returns: undefined }
      weather_today: {
        Args: never
        Returns: {
          label: string
          share: number
          total: number
          weather: string
        }[]
      }
      weather_today_by_province: {
        Args: never
        Returns: {
          label: string
          province: string
          share: number
          total: number
          weather: string
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
