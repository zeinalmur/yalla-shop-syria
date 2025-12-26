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
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      admin_whitelist: {
        Row: {
          created_at: string
          created_by: string | null
          email: string
          id: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          email: string
          id?: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          email?: string
          id?: string
        }
        Relationships: []
      }
      app_settings: {
        Row: {
          id: string
          key: string
          updated_at: string
          value: Json
        }
        Insert: {
          id?: string
          key: string
          updated_at?: string
          value: Json
        }
        Update: {
          id?: string
          key?: string
          updated_at?: string
          value?: Json
        }
        Relationships: []
      }
      banners: {
        Row: {
          clicks: number | null
          created_at: string
          ends_at: string | null
          id: string
          image: string
          is_active: boolean | null
          link: string | null
          position: string | null
          sort_order: number | null
          starts_at: string | null
          title: string
          title_ar: string | null
          updated_at: string
          views: number | null
        }
        Insert: {
          clicks?: number | null
          created_at?: string
          ends_at?: string | null
          id?: string
          image: string
          is_active?: boolean | null
          link?: string | null
          position?: string | null
          sort_order?: number | null
          starts_at?: string | null
          title: string
          title_ar?: string | null
          updated_at?: string
          views?: number | null
        }
        Update: {
          clicks?: number | null
          created_at?: string
          ends_at?: string | null
          id?: string
          image?: string
          is_active?: boolean | null
          link?: string | null
          position?: string | null
          sort_order?: number | null
          starts_at?: string | null
          title?: string
          title_ar?: string | null
          updated_at?: string
          views?: number | null
        }
        Relationships: []
      }
      cart_items: {
        Row: {
          created_at: string
          id: string
          product_id: string | null
          quantity: number
          selected_color: string | null
          selected_size: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          product_id?: string | null
          quantity?: number
          selected_color?: string | null
          selected_size?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          product_id?: string | null
          quantity?: number
          selected_color?: string | null
          selected_size?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "cart_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      categories: {
        Row: {
          code: string | null
          created_at: string
          icon: string | null
          id: string
          image: string | null
          is_active: boolean | null
          name: string
          name_ar: string
          parent_id: string | null
          sort_order: number | null
          updated_at: string
        }
        Insert: {
          code?: string | null
          created_at?: string
          icon?: string | null
          id?: string
          image?: string | null
          is_active?: boolean | null
          name: string
          name_ar: string
          parent_id?: string | null
          sort_order?: number | null
          updated_at?: string
        }
        Update: {
          code?: string | null
          created_at?: string
          icon?: string | null
          id?: string
          image?: string | null
          is_active?: boolean | null
          name?: string
          name_ar?: string
          parent_id?: string | null
          sort_order?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "categories_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      coupons: {
        Row: {
          code: string
          created_at: string
          discount: number
          discount_type: string
          id: string
          is_active: boolean | null
          max_discount: number | null
          min_purchase: number | null
          store_id: string | null
          updated_at: string
          usage_limit: number | null
          used_count: number | null
          valid_from: string | null
          valid_until: string
        }
        Insert: {
          code: string
          created_at?: string
          discount: number
          discount_type: string
          id?: string
          is_active?: boolean | null
          max_discount?: number | null
          min_purchase?: number | null
          store_id?: string | null
          updated_at?: string
          usage_limit?: number | null
          used_count?: number | null
          valid_from?: string | null
          valid_until: string
        }
        Update: {
          code?: string
          created_at?: string
          discount?: number
          discount_type?: string
          id?: string
          is_active?: boolean | null
          max_discount?: number | null
          min_purchase?: number | null
          store_id?: string | null
          updated_at?: string
          usage_limit?: number | null
          used_count?: number | null
          valid_from?: string | null
          valid_until?: string
        }
        Relationships: [
          {
            foreignKeyName: "coupons_store_id_fkey"
            columns: ["store_id"]
            isOneToOne: false
            referencedRelation: "stores"
            referencedColumns: ["id"]
          },
        ]
      }
      expenses: {
        Row: {
          amount: number
          category: Database["public"]["Enums"]["expense_category"] | null
          created_at: string | null
          created_by: string | null
          currency: string | null
          description: string | null
          expense_date: string | null
          id: string
          is_recurring: boolean | null
          receipt_url: string | null
          recurrence_period: string | null
          title: string
          updated_at: string | null
          wallet_id: string | null
        }
        Insert: {
          amount: number
          category?: Database["public"]["Enums"]["expense_category"] | null
          created_at?: string | null
          created_by?: string | null
          currency?: string | null
          description?: string | null
          expense_date?: string | null
          id?: string
          is_recurring?: boolean | null
          receipt_url?: string | null
          recurrence_period?: string | null
          title: string
          updated_at?: string | null
          wallet_id?: string | null
        }
        Update: {
          amount?: number
          category?: Database["public"]["Enums"]["expense_category"] | null
          created_at?: string | null
          created_by?: string | null
          currency?: string | null
          description?: string | null
          expense_date?: string | null
          id?: string
          is_recurring?: boolean | null
          receipt_url?: string | null
          recurrence_period?: string | null
          title?: string
          updated_at?: string | null
          wallet_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "expenses_wallet_id_fkey"
            columns: ["wallet_id"]
            isOneToOne: false
            referencedRelation: "wallets"
            referencedColumns: ["id"]
          },
        ]
      }
      favorites: {
        Row: {
          created_at: string
          id: string
          product_id: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          product_id?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          product_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "favorites_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      inventory: {
        Row: {
          available_quantity: number | null
          created_at: string | null
          id: string
          last_counted_at: string | null
          product_id: string | null
          quantity: number | null
          reserved_quantity: number | null
          updated_at: string | null
          warehouse_id: string | null
        }
        Insert: {
          available_quantity?: number | null
          created_at?: string | null
          id?: string
          last_counted_at?: string | null
          product_id?: string | null
          quantity?: number | null
          reserved_quantity?: number | null
          updated_at?: string | null
          warehouse_id?: string | null
        }
        Update: {
          available_quantity?: number | null
          created_at?: string | null
          id?: string
          last_counted_at?: string | null
          product_id?: string | null
          quantity?: number | null
          reserved_quantity?: number | null
          updated_at?: string | null
          warehouse_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "inventory_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_warehouse_id_fkey"
            columns: ["warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["id"]
          },
        ]
      }
      inventory_movements: {
        Row: {
          created_at: string | null
          created_by: string | null
          id: string
          movement_type: Database["public"]["Enums"]["inventory_movement_type"]
          notes: string | null
          product_id: string | null
          quantity: number
          reference_id: string | null
          reference_type: string | null
          total_cost: number | null
          unit_cost: number | null
          warehouse_id: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          id?: string
          movement_type: Database["public"]["Enums"]["inventory_movement_type"]
          notes?: string | null
          product_id?: string | null
          quantity: number
          reference_id?: string | null
          reference_type?: string | null
          total_cost?: number | null
          unit_cost?: number | null
          warehouse_id?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          id?: string
          movement_type?: Database["public"]["Enums"]["inventory_movement_type"]
          notes?: string | null
          product_id?: string | null
          quantity?: number
          reference_id?: string | null
          reference_type?: string | null
          total_cost?: number | null
          unit_cost?: number | null
          warehouse_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "inventory_movements_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_movements_warehouse_id_fkey"
            columns: ["warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["id"]
          },
        ]
      }
      invoice_items: {
        Row: {
          created_at: string | null
          discount_amount: number | null
          id: string
          invoice_id: string | null
          product_id: string | null
          quantity: number
          tax_amount: number | null
          total: number
          unit_cost: number | null
          unit_price: number
        }
        Insert: {
          created_at?: string | null
          discount_amount?: number | null
          id?: string
          invoice_id?: string | null
          product_id?: string | null
          quantity: number
          tax_amount?: number | null
          total: number
          unit_cost?: number | null
          unit_price: number
        }
        Update: {
          created_at?: string | null
          discount_amount?: number | null
          id?: string
          invoice_id?: string | null
          product_id?: string | null
          quantity?: number
          tax_amount?: number | null
          total?: number
          unit_cost?: number | null
          unit_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "invoice_items_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoice_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      invoices: {
        Row: {
          created_at: string | null
          created_by: string | null
          currency: string | null
          customer_id: string | null
          discount_amount: number | null
          due_amount: number | null
          due_date: string | null
          id: string
          invoice_number: string
          invoice_type: Database["public"]["Enums"]["invoice_type"]
          issue_date: string | null
          notes: string | null
          order_id: string | null
          paid_amount: number | null
          shipping_amount: number | null
          status: Database["public"]["Enums"]["invoice_status"] | null
          subtotal: number
          supplier_id: string | null
          tax_amount: number | null
          total: number
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          currency?: string | null
          customer_id?: string | null
          discount_amount?: number | null
          due_amount?: number | null
          due_date?: string | null
          id?: string
          invoice_number: string
          invoice_type: Database["public"]["Enums"]["invoice_type"]
          issue_date?: string | null
          notes?: string | null
          order_id?: string | null
          paid_amount?: number | null
          shipping_amount?: number | null
          status?: Database["public"]["Enums"]["invoice_status"] | null
          subtotal?: number
          supplier_id?: string | null
          tax_amount?: number | null
          total?: number
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          currency?: string | null
          customer_id?: string | null
          discount_amount?: number | null
          due_amount?: number | null
          due_date?: string | null
          id?: string
          invoice_number?: string
          invoice_type?: Database["public"]["Enums"]["invoice_type"]
          issue_date?: string | null
          notes?: string | null
          order_id?: string | null
          paid_amount?: number | null
          shipping_amount?: number | null
          status?: Database["public"]["Enums"]["invoice_status"] | null
          subtotal?: number
          supplier_id?: string | null
          tax_amount?: number | null
          total?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "invoices_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "suppliers"
            referencedColumns: ["id"]
          },
        ]
      }
      loyalty_tiers: {
        Row: {
          benefits: string[] | null
          color: string
          created_at: string
          id: string
          max_points: number
          min_points: number
          tier: string
          tier_ar: string
        }
        Insert: {
          benefits?: string[] | null
          color: string
          created_at?: string
          id?: string
          max_points: number
          min_points: number
          tier: string
          tier_ar: string
        }
        Update: {
          benefits?: string[] | null
          color?: string
          created_at?: string
          id?: string
          max_points?: number
          min_points?: number
          tier?: string
          tier_ar?: string
        }
        Relationships: []
      }
      loyalty_transactions: {
        Row: {
          balance_after: number
          created_at: string
          description: string | null
          id: string
          points: number
          reference_id: string | null
          reference_type: string | null
          type: string
          user_id: string
        }
        Insert: {
          balance_after?: number
          created_at?: string
          description?: string | null
          id?: string
          points: number
          reference_id?: string | null
          reference_type?: string | null
          type: string
          user_id: string
        }
        Update: {
          balance_after?: number
          created_at?: string
          description?: string | null
          id?: string
          points?: number
          reference_id?: string | null
          reference_type?: string | null
          type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "loyalty_transactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      order_items: {
        Row: {
          created_at: string
          id: string
          order_id: string | null
          product_id: string | null
          quantity: number
          selected_color: string | null
          selected_size: string | null
          total_price: number
          unit_price: number
        }
        Insert: {
          created_at?: string
          id?: string
          order_id?: string | null
          product_id?: string | null
          quantity: number
          selected_color?: string | null
          selected_size?: string | null
          total_price: number
          unit_price: number
        }
        Update: {
          created_at?: string
          id?: string
          order_id?: string | null
          product_id?: string | null
          quantity?: number
          selected_color?: string | null
          selected_size?: string | null
          total_price?: number
          unit_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      order_status_history: {
        Row: {
          created_at: string
          created_by: string | null
          id: string
          notes: string | null
          order_id: string
          status: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          id?: string
          notes?: string | null
          order_id: string
          status: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          id?: string
          notes?: string | null
          order_id?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "order_status_history_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          coupon_code: string | null
          created_at: string
          currency: string | null
          discount_amount: number | null
          id: string
          notes: string | null
          order_number: string
          payment_method: string | null
          payment_proof: string | null
          payment_status: string | null
          shipping_address: string | null
          shipping_amount: number | null
          shipping_city: string | null
          shipping_phone: string | null
          status: string | null
          store_id: string | null
          subtotal: number
          total: number
          updated_at: string
          user_id: string | null
        }
        Insert: {
          coupon_code?: string | null
          created_at?: string
          currency?: string | null
          discount_amount?: number | null
          id?: string
          notes?: string | null
          order_number: string
          payment_method?: string | null
          payment_proof?: string | null
          payment_status?: string | null
          shipping_address?: string | null
          shipping_amount?: number | null
          shipping_city?: string | null
          shipping_phone?: string | null
          status?: string | null
          store_id?: string | null
          subtotal: number
          total: number
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          coupon_code?: string | null
          created_at?: string
          currency?: string | null
          discount_amount?: number | null
          id?: string
          notes?: string | null
          order_number?: string
          payment_method?: string | null
          payment_proof?: string | null
          payment_status?: string | null
          shipping_address?: string | null
          shipping_amount?: number | null
          shipping_city?: string | null
          shipping_phone?: string | null
          status?: string | null
          store_id?: string | null
          subtotal?: number
          total?: number
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_store_id_fkey"
            columns: ["store_id"]
            isOneToOne: false
            referencedRelation: "stores"
            referencedColumns: ["id"]
          },
        ]
      }
      payments: {
        Row: {
          amount: number
          created_at: string | null
          created_by: string | null
          currency: string | null
          id: string
          invoice_id: string | null
          notes: string | null
          payment_date: string | null
          payment_method:
            | Database["public"]["Enums"]["payment_method_type"]
            | null
          reference_number: string | null
          wallet_id: string | null
        }
        Insert: {
          amount: number
          created_at?: string | null
          created_by?: string | null
          currency?: string | null
          id?: string
          invoice_id?: string | null
          notes?: string | null
          payment_date?: string | null
          payment_method?:
            | Database["public"]["Enums"]["payment_method_type"]
            | null
          reference_number?: string | null
          wallet_id?: string | null
        }
        Update: {
          amount?: number
          created_at?: string | null
          created_by?: string | null
          currency?: string | null
          id?: string
          invoice_id?: string | null
          notes?: string | null
          payment_date?: string | null
          payment_method?:
            | Database["public"]["Enums"]["payment_method_type"]
            | null
          reference_number?: string | null
          wallet_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payments_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_wallet_id_fkey"
            columns: ["wallet_id"]
            isOneToOne: false
            referencedRelation: "wallets"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          barcode: string | null
          category_id: string | null
          colors: string[] | null
          created_at: string
          currency: string | null
          description: string | null
          description_ar: string | null
          discount: number | null
          id: string
          images: string[] | null
          is_active: boolean | null
          is_featured: boolean | null
          min_stock_threshold: number | null
          name: string
          name_ar: string | null
          original_price: number | null
          price: number
          purchase_price: number | null
          rating: number | null
          review_count: number | null
          sales_count: number | null
          sizes: string[] | null
          sku: string | null
          stock_count: number | null
          store_id: string | null
          tags: string[] | null
          tax_rate: number | null
          unit: string | null
          updated_at: string
          view_count: number | null
          weight: number | null
        }
        Insert: {
          barcode?: string | null
          category_id?: string | null
          colors?: string[] | null
          created_at?: string
          currency?: string | null
          description?: string | null
          description_ar?: string | null
          discount?: number | null
          id?: string
          images?: string[] | null
          is_active?: boolean | null
          is_featured?: boolean | null
          min_stock_threshold?: number | null
          name: string
          name_ar?: string | null
          original_price?: number | null
          price: number
          purchase_price?: number | null
          rating?: number | null
          review_count?: number | null
          sales_count?: number | null
          sizes?: string[] | null
          sku?: string | null
          stock_count?: number | null
          store_id?: string | null
          tags?: string[] | null
          tax_rate?: number | null
          unit?: string | null
          updated_at?: string
          view_count?: number | null
          weight?: number | null
        }
        Update: {
          barcode?: string | null
          category_id?: string | null
          colors?: string[] | null
          created_at?: string
          currency?: string | null
          description?: string | null
          description_ar?: string | null
          discount?: number | null
          id?: string
          images?: string[] | null
          is_active?: boolean | null
          is_featured?: boolean | null
          min_stock_threshold?: number | null
          name?: string
          name_ar?: string | null
          original_price?: number | null
          price?: number
          purchase_price?: number | null
          rating?: number | null
          review_count?: number | null
          sales_count?: number | null
          sizes?: string[] | null
          sku?: string | null
          stock_count?: number | null
          store_id?: string | null
          tags?: string[] | null
          tax_rate?: number | null
          unit?: string | null
          updated_at?: string
          view_count?: number | null
          weight?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "products_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_store_id_fkey"
            columns: ["store_id"]
            isOneToOne: false
            referencedRelation: "stores"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          balance: number | null
          city: string | null
          country: string | null
          created_at: string
          credit_limit: number | null
          delivery_address: string | null
          email: string | null
          full_name: string | null
          id: string
          loyalty_points: number | null
          notes: string | null
          phone: string | null
          total_orders: number | null
          total_spent: number | null
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          balance?: number | null
          city?: string | null
          country?: string | null
          created_at?: string
          credit_limit?: number | null
          delivery_address?: string | null
          email?: string | null
          full_name?: string | null
          id: string
          loyalty_points?: number | null
          notes?: string | null
          phone?: string | null
          total_orders?: number | null
          total_spent?: number | null
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          balance?: number | null
          city?: string | null
          country?: string | null
          created_at?: string
          credit_limit?: number | null
          delivery_address?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          loyalty_points?: number | null
          notes?: string | null
          phone?: string | null
          total_orders?: number | null
          total_spent?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      promotions: {
        Row: {
          category_ids: string[] | null
          created_at: string
          description: string | null
          description_ar: string | null
          ends_at: string | null
          id: string
          is_active: boolean | null
          min_purchase: number | null
          name: string
          name_ar: string | null
          product_ids: string[] | null
          starts_at: string | null
          type: string
          updated_at: string
          value: number | null
        }
        Insert: {
          category_ids?: string[] | null
          created_at?: string
          description?: string | null
          description_ar?: string | null
          ends_at?: string | null
          id?: string
          is_active?: boolean | null
          min_purchase?: number | null
          name: string
          name_ar?: string | null
          product_ids?: string[] | null
          starts_at?: string | null
          type: string
          updated_at?: string
          value?: number | null
        }
        Update: {
          category_ids?: string[] | null
          created_at?: string
          description?: string | null
          description_ar?: string | null
          ends_at?: string | null
          id?: string
          is_active?: boolean | null
          min_purchase?: number | null
          name?: string
          name_ar?: string | null
          product_ids?: string[] | null
          starts_at?: string | null
          type?: string
          updated_at?: string
          value?: number | null
        }
        Relationships: []
      }
      purchase_order_items: {
        Row: {
          created_at: string | null
          id: string
          product_id: string | null
          purchase_order_id: string | null
          quantity: number
          received_quantity: number | null
          total: number
          unit_cost: number
        }
        Insert: {
          created_at?: string | null
          id?: string
          product_id?: string | null
          purchase_order_id?: string | null
          quantity: number
          received_quantity?: number | null
          total: number
          unit_cost: number
        }
        Update: {
          created_at?: string | null
          id?: string
          product_id?: string | null
          purchase_order_id?: string | null
          quantity?: number
          received_quantity?: number | null
          total?: number
          unit_cost?: number
        }
        Relationships: [
          {
            foreignKeyName: "purchase_order_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "purchase_order_items_purchase_order_id_fkey"
            columns: ["purchase_order_id"]
            isOneToOne: false
            referencedRelation: "purchase_orders"
            referencedColumns: ["id"]
          },
        ]
      }
      purchase_orders: {
        Row: {
          created_at: string | null
          created_by: string | null
          currency: string | null
          expected_date: string | null
          id: string
          notes: string | null
          order_date: string | null
          po_number: string
          received_date: string | null
          shipping_amount: number | null
          status: Database["public"]["Enums"]["purchase_order_status"] | null
          subtotal: number | null
          supplier_id: string | null
          tax_amount: number | null
          total: number | null
          updated_at: string | null
          warehouse_id: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          currency?: string | null
          expected_date?: string | null
          id?: string
          notes?: string | null
          order_date?: string | null
          po_number: string
          received_date?: string | null
          shipping_amount?: number | null
          status?: Database["public"]["Enums"]["purchase_order_status"] | null
          subtotal?: number | null
          supplier_id?: string | null
          tax_amount?: number | null
          total?: number | null
          updated_at?: string | null
          warehouse_id?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          currency?: string | null
          expected_date?: string | null
          id?: string
          notes?: string | null
          order_date?: string | null
          po_number?: string
          received_date?: string | null
          shipping_amount?: number | null
          status?: Database["public"]["Enums"]["purchase_order_status"] | null
          subtotal?: number | null
          supplier_id?: string | null
          tax_amount?: number | null
          total?: number | null
          updated_at?: string | null
          warehouse_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "purchase_orders_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "suppliers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "purchase_orders_warehouse_id_fkey"
            columns: ["warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["id"]
          },
        ]
      }
      reviews: {
        Row: {
          comment: string | null
          created_at: string
          helpful_count: number | null
          id: string
          images: string[] | null
          is_approved: boolean | null
          order_id: string | null
          product_id: string | null
          rating: number
          updated_at: string
          user_id: string | null
        }
        Insert: {
          comment?: string | null
          created_at?: string
          helpful_count?: number | null
          id?: string
          images?: string[] | null
          is_approved?: boolean | null
          order_id?: string | null
          product_id?: string | null
          rating: number
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          comment?: string | null
          created_at?: string
          helpful_count?: number | null
          id?: string
          images?: string[] | null
          is_approved?: boolean | null
          order_id?: string | null
          product_id?: string | null
          rating?: number
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "reviews_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reviews_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      store_follows: {
        Row: {
          created_at: string
          id: string
          store_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          store_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          store_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "store_follows_store_id_fkey"
            columns: ["store_id"]
            isOneToOne: false
            referencedRelation: "stores"
            referencedColumns: ["id"]
          },
        ]
      }
      store_requests: {
        Row: {
          address: string | null
          admin_notes: string | null
          category: string | null
          city: string
          created_at: string
          description: string | null
          email: string
          id: string
          owner_name: string
          phone: string
          social_links: Json | null
          status: string | null
          store_name: string
          store_name_ar: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          address?: string | null
          admin_notes?: string | null
          category?: string | null
          city: string
          created_at?: string
          description?: string | null
          email: string
          id?: string
          owner_name: string
          phone: string
          social_links?: Json | null
          status?: string | null
          store_name: string
          store_name_ar?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          address?: string | null
          admin_notes?: string | null
          category?: string | null
          city?: string
          created_at?: string
          description?: string | null
          email?: string
          id?: string
          owner_name?: string
          phone?: string
          social_links?: Json | null
          status?: string | null
          store_name?: string
          store_name_ar?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      stores: {
        Row: {
          address: string | null
          banner: string | null
          city: string | null
          created_at: string
          description: string | null
          description_ar: string | null
          email: string | null
          followers: number | null
          id: string
          is_active: boolean | null
          is_verified: boolean | null
          logo: string | null
          name: string
          name_ar: string | null
          owner_id: string | null
          phone: string | null
          product_count: number | null
          rating: number | null
          subscription_expires_at: string | null
          subscription_type: string | null
          updated_at: string
        }
        Insert: {
          address?: string | null
          banner?: string | null
          city?: string | null
          created_at?: string
          description?: string | null
          description_ar?: string | null
          email?: string | null
          followers?: number | null
          id?: string
          is_active?: boolean | null
          is_verified?: boolean | null
          logo?: string | null
          name: string
          name_ar?: string | null
          owner_id?: string | null
          phone?: string | null
          product_count?: number | null
          rating?: number | null
          subscription_expires_at?: string | null
          subscription_type?: string | null
          updated_at?: string
        }
        Update: {
          address?: string | null
          banner?: string | null
          city?: string | null
          created_at?: string
          description?: string | null
          description_ar?: string | null
          email?: string | null
          followers?: number | null
          id?: string
          is_active?: boolean | null
          is_verified?: boolean | null
          logo?: string | null
          name?: string
          name_ar?: string | null
          owner_id?: string | null
          phone?: string | null
          product_count?: number | null
          rating?: number | null
          subscription_expires_at?: string | null
          subscription_type?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      suppliers: {
        Row: {
          address: string | null
          balance: number | null
          city: string | null
          contact_person: string | null
          country: string | null
          created_at: string | null
          email: string | null
          id: string
          is_active: boolean | null
          name: string
          name_ar: string | null
          notes: string | null
          phone: string | null
          tax_number: string | null
          updated_at: string | null
        }
        Insert: {
          address?: string | null
          balance?: number | null
          city?: string | null
          contact_person?: string | null
          country?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          name_ar?: string | null
          notes?: string | null
          phone?: string | null
          tax_number?: string | null
          updated_at?: string | null
        }
        Update: {
          address?: string | null
          balance?: number | null
          city?: string | null
          contact_person?: string | null
          country?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          name_ar?: string | null
          notes?: string | null
          phone?: string | null
          tax_number?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      transactions: {
        Row: {
          amount: number
          created_at: string
          currency: string | null
          id: string
          notes: string | null
          order_id: string | null
          payment_method: string | null
          reference: string | null
          status: string | null
          store_id: string | null
          type: string
          user_id: string | null
        }
        Insert: {
          amount: number
          created_at?: string
          currency?: string | null
          id?: string
          notes?: string | null
          order_id?: string | null
          payment_method?: string | null
          reference?: string | null
          status?: string | null
          store_id?: string | null
          type: string
          user_id?: string | null
        }
        Update: {
          amount?: number
          created_at?: string
          currency?: string | null
          id?: string
          notes?: string | null
          order_id?: string | null
          payment_method?: string | null
          reference?: string | null
          status?: string | null
          store_id?: string | null
          type?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "transactions_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_store_id_fkey"
            columns: ["store_id"]
            isOneToOne: false
            referencedRelation: "stores"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      user_settings: {
        Row: {
          created_at: string
          id: string
          language: string | null
          notifications_enabled: boolean | null
          theme: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          language?: string | null
          notifications_enabled?: boolean | null
          theme?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          language?: string | null
          notifications_enabled?: boolean | null
          theme?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      wallets: {
        Row: {
          account_number: string | null
          balance: number | null
          bank_name: string | null
          created_at: string | null
          currency: string | null
          id: string
          is_active: boolean | null
          is_default: boolean | null
          name: string
          name_ar: string | null
          updated_at: string | null
          wallet_type: Database["public"]["Enums"]["wallet_type"] | null
        }
        Insert: {
          account_number?: string | null
          balance?: number | null
          bank_name?: string | null
          created_at?: string | null
          currency?: string | null
          id?: string
          is_active?: boolean | null
          is_default?: boolean | null
          name: string
          name_ar?: string | null
          updated_at?: string | null
          wallet_type?: Database["public"]["Enums"]["wallet_type"] | null
        }
        Update: {
          account_number?: string | null
          balance?: number | null
          bank_name?: string | null
          created_at?: string | null
          currency?: string | null
          id?: string
          is_active?: boolean | null
          is_default?: boolean | null
          name?: string
          name_ar?: string | null
          updated_at?: string | null
          wallet_type?: Database["public"]["Enums"]["wallet_type"] | null
        }
        Relationships: []
      }
      warehouses: {
        Row: {
          address: string | null
          city: string | null
          created_at: string | null
          id: string
          is_active: boolean | null
          is_default: boolean | null
          manager_id: string | null
          name: string
          name_ar: string | null
          phone: string | null
          updated_at: string | null
        }
        Insert: {
          address?: string | null
          city?: string | null
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          is_default?: boolean | null
          manager_id?: string | null
          name: string
          name_ar?: string | null
          phone?: string | null
          updated_at?: string | null
        }
        Update: {
          address?: string | null
          city?: string | null
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          is_default?: boolean | null
          manager_id?: string | null
          name?: string
          name_ar?: string | null
          phone?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      daily_financial_summary: {
        Row: {
          date: string | null
          purchases_count: number | null
          sales_count: number | null
          total_purchases: number | null
          total_sales: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      add_loyalty_points: {
        Args: {
          p_description?: string
          p_points: number
          p_reference_id?: string
          p_reference_type?: string
          p_type: string
          p_user_id: string
        }
        Returns: number
      }
      calculate_order_points: { Args: { order_total: number }; Returns: number }
      get_user_role: {
        Args: { _user_id: string }
        Returns: Database["public"]["Enums"]["app_role"]
      }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "seller" | "customer"
      expense_category:
        | "operations"
        | "shipping"
        | "marketing"
        | "salaries"
        | "rent"
        | "utilities"
        | "supplies"
        | "maintenance"
        | "taxes"
        | "other"
      inventory_movement_type:
        | "purchase"
        | "sale"
        | "adjustment"
        | "transfer"
        | "damage"
        | "return"
      invoice_status:
        | "draft"
        | "pending"
        | "paid"
        | "partially_paid"
        | "cancelled"
        | "refunded"
      invoice_type: "sale" | "purchase" | "return_sale" | "return_purchase"
      payment_method_type:
        | "cash"
        | "bank_transfer"
        | "credit_card"
        | "payment_gateway"
        | "check"
        | "other"
      purchase_order_status:
        | "draft"
        | "pending"
        | "approved"
        | "ordered"
        | "received"
        | "cancelled"
      wallet_type: "cash" | "bank" | "payment_gateway" | "other"
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
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
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
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
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
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
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
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
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
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "seller", "customer"],
      expense_category: [
        "operations",
        "shipping",
        "marketing",
        "salaries",
        "rent",
        "utilities",
        "supplies",
        "maintenance",
        "taxes",
        "other",
      ],
      inventory_movement_type: [
        "purchase",
        "sale",
        "adjustment",
        "transfer",
        "damage",
        "return",
      ],
      invoice_status: [
        "draft",
        "pending",
        "paid",
        "partially_paid",
        "cancelled",
        "refunded",
      ],
      invoice_type: ["sale", "purchase", "return_sale", "return_purchase"],
      payment_method_type: [
        "cash",
        "bank_transfer",
        "credit_card",
        "payment_gateway",
        "check",
        "other",
      ],
      purchase_order_status: [
        "draft",
        "pending",
        "approved",
        "ordered",
        "received",
        "cancelled",
      ],
      wallet_type: ["cash", "bank", "payment_gateway", "other"],
    },
  },
} as const
