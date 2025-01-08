using Microsoft.EntityFrameworkCore;

namespace PaymentAPI.Models;

public class PaymentDetailContext:DbContext
{
    public DbSet<PaymentDetail>? PaymentDetails {get;set;}
    public PaymentDetailContext(DbContextOptions options) : base(options) { }
}
