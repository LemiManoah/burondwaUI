export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at?: string;
  status: string;
  profile_data?: unknown;
  phone_number?: string;
  avatar?: string;
  timezone: string;
  locale: string;
  last_login_at?: string;
  last_login_ip?: string;
  login_count: number;
  created_at: string;
  updated_at: string;
}

export interface Role {
  id: number;
  name: string;
  guard_name: string;
  created_at: string;
  updated_at: string;
}

export interface InventoryCategory {
  id: number;
  name: string;
  description?: string;
  created_at: string;
  updated_at: string;
}

export interface InventoryItem {
  id: number;
  name: string;
  sku: string;
  category_id: number;
  category?: {
    id: number;
    name: string;
  };
  current_stock: number;
  minimum_threshold: number;
  maximum_consumption?: number;
  unit_id: number;
  unit?: {
    id: number;
    name: string;
  };
  location_id?: number;
  location?: {
    id: number;
    name: string;
  };
  unit_price: number;
  selling_price?: number;
  is_active: boolean;
  is_expired: boolean;
  expiry_date?: string; // YYYY-MM-DD
  supplier_id?: number;
  supplier?: {
    id: number;
    name: string;
  };
  created_at: string;
  updated_at: string;
  deleted_at?: string;
  created_by?: {
    id: number;
    name: string;
  };
  updated_by?: {
    id: number;
    name: string;
  } | null;
  deleted_by?: {
    id: number;
    name: string;
  } | null;
}

export interface Product {
  id: number;
  name: string;
  description?: string;
  category_id: number;
  category: {
    id: number;
    name: string;
  };
  unit_id: number;
  unit: {
    id: number;
    name: string;
  };
  min_stock_level: number;
  current_stock: number;
  price: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  deleted_at?: string;
  created_by?: {
    id: number;
    name: string;
  } | null;
  updated_by?: {
    id: number;
    name: string;
  } | null;
  deleted_by?: {
    id: number;
    name: string;
  } | null;
}

export interface SaleItem {
  id: number;
  sale_id: number;
  product_id: number;
  product: {
    id: number;
    name: string;
  };
  quantity: number;
  unit_id: number;
  unit: {
    id: number;
    name: string;
  };
  unit_price: number;
  discount_amount: number;
  total_amount: number;
  created_at: string;
  updated_at: string;
  deleted_at?: string;
  created_by?: {
    id: number;
    name: string;
  };
  updated_by?: {
    id: number;
    name: string;
  } | null;
  deleted_by?: {
    id: number;
    name: string;
  } | null;
}

export interface Sale {
  id: number;
  invoice_number?: string;
  sale_date: string; // YYYY-MM-DD
  customer_id?: number;
  customer?: {
    id: number;
    name: string;
  };
  payment_method_id?: number;
  payment_method?: {
    id: number;
    name: string;
  };
  notes?: string;
  subtotal: number;
  discount_amount: number;
  total_amount: number;
  status: 'draft' | 'completed' | 'cancelled';
  is_approved: boolean;
  approved_at?: string; // ISO datetime
  is_cancelled: boolean;
  cancelled_at?: string; // ISO datetime
  created_at: string;
  updated_at: string;
  deleted_at?: string;
  created_by?: {
    id: number;
    name: string;
  };
  updated_by?: {
    id: number;
    name: string;
  } | null;
  deleted_by?: {
    id: number;
    name: string;
  } | null;
  approved_by?: {
    id: number;
    name: string;
  } | null;
  cancelled_by?: {
    id: number;
    name: string;
  } | null;
  items: SaleItem[];
}

export interface InventoryItemTransaction {
  id: number;
  inventory_item_id: number;
  inventory_item: {
    id: number;
    name: string;
    sku: string;
  };
  transaction_type_id: number;
  transaction_type: {
    id: number;
    name: string;
    code: string;
  };
  unit_id: number;
  unit: {
    id: number;
    name: string;
  };
  quantity: number;
  unit_price?: number;
  total_price?: number;
  reference_number?: string;
  notes?: string;
  transaction_date: string; // YYYY-MM-DD
  is_approved: boolean;
  approved_at?: string; // ISO datetime
  supplier_id?: number;
  supplier?: {
    id: number;
    name: string;
  };
  created_at: string;
  updated_at: string;
  deleted_at?: string;
  created_by: {
    id: number;
    name: string;
  };
  updated_by?: {
    id: number;
    name: string;
  } | null;
  deleted_by?: {
    id: number;
    name: string;
  } | null;
  approved_by?: {
    id: number;
    name: string;
  } | null;
}

export interface AccountTransactionEntry {
  id: number;
  account_transaction_id: number;
  account_id: number;
  account: {
    id: number;
    name: string;
    account_number: string;
  };
  type: 'debit' | 'credit';
  amount: number;
  description?: string;
  created_at: string;
  updated_at: string;
  deleted_at?: string;
  created_by?: {
    id: number;
    name: string;
  } | null;
  updated_by?: {
    id: number;
    name: string;
  } | null;
  deleted_by?: {
    id: number;
    name: string;
  } | null;
}

export interface ProductCollection {
  id: number;
  product: {
    id: number;
    name: string;
  };
  collection_date: string; // YYYY-MM-DD
  quantity: number;
  notes?: string;
  quality_grade?: 'A' | 'B' | 'C' | 'D' | 'E';
  harvest_method?: 'Mechanical' | 'Manual';
  collected_by?: {
    id: number;
    name: string;
  };
  created_at: string;
  updated_at: string;
  deleted_at?: string;
}

export interface AccountType {
  id: number;
  name: string;
  description?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  created_by?: {
    id: number;
    name: string;
    email: string;
  };
  updated_by?: {
    id: number;
    name: string;
    email: string;
  } | null;
}

export interface Account {
  id: number;
  name: string;
  account_number: string;
  account_type: {
    id: number;
    name: string;
  };
  opening_balance: number;
  current_balance: number;
  currency: string; // 3-letter currency code (e.g., 'USD')
  description?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  deleted_at?: string;
  created_by?: {
    id: number;
    name: string;
  };
  updated_by?: {
    id: number;
    name: string;
  } | null;
}

export interface AccountTransaction {
  id: number;
  date: string; // YYYY-MM-DD
  reference: string;
  description?: string;
  transaction_type_id: number;
  transaction_type?: {
    id: number;
    name: string;
    code: string;
  };
  amount: number;
  is_posted: boolean;
  posted_at?: string; // YYYY-MM-DD HH:MM:SS
  entries?: AccountTransactionEntry[];
  created_at: string; // YYYY-MM-DD HH:MM:SS
  updated_at: string; // YYYY-MM-DD HH:MM:SS
  created_by?: {
    id: number;
    name: string;
  };
  updated_by?: {
    id: number;
    name: string;
  } | null;
}

// Auth types
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  status?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  from: number;
  to: number;
}