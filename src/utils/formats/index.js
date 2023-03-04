export const formatCurrency = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});

export const formatDate = new Intl.DateTimeFormat(['ban', 'id']);
